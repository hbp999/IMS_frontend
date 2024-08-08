import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonEngine } from '@angular/ssr';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';



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
string: any;

constructor(private http: HttpClient, private router :Router) {
  

}


toggleVisibility(): void{
  this.hide = !this.hide;
}
submit() {
  if(this.tray.MailId == "" && this.tray.Password == ""){
    console.log('Enter Credentials');
  }

  else{
  this.addItems('https://localhost:44396/api/IMS/PostUser',this.tray)
    .subscribe(
      items => {
          console.log(items);
          this.router.navigateByUrl('/Login') ;
      });
    }
      
}
login(){
  this.router.navigateByUrl('/Login');
}
addItems(url: string, data: any): Observable<string> {
  return this.http.post(url, data, { responseType: 'text' });
}
}
