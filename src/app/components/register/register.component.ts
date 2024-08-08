import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonEngine } from '@angular/ssr';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
tray: any={
  MailId:'',
  Password:''
}
hide=true;
constructor(private http: HttpClient) {

}
toggleVisibility(): void{
  this.hide = !this.hide;
}
submit() {

  this.addItems('https://localhost:44396/api/IMS/PostUser',this.tray)
    .subscribe(
      items => {
        console.log(items);
      });
      
}
addItems(url: string, data: any): Observable<string> {
  return this.http.post(url, data, { responseType: 'text' });
}
}
