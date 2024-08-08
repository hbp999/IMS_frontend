import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  check: any=[]
  pass: any={
    MailId:'',
    Password:''
  }
  hide = true;
  submitted: any;


  constructor(private http: HttpClient, private router: Router) {
    var isLogin = localStorage.getItem('isLogin');
    if(isLogin == "true"){
      this.router.navigateByUrl('/');
      
    }   

  }
  toggleVisibility(): void{
    this.hide = !this.hide;
  }
  submit() {

    
    this.addItems('https://localhost:44396/api/IMS/PostLogin', this.pass)
    .subscribe(
      items => {
        if(items=="Ok")
          {
            localStorage.setItem("isLogin","true")
            this.router.navigateByUrl('/')
            this.notifyMessage();
          }
          
       
      });
         
        }
         
        notifyMessage() {
          
            notify({ message: "form submitted" }, "success", 2000);
          
        }

      login(){
        this.router.navigateByUrl('/Register');
      }
        
  addItems(url: string, data: any): Observable<string> {
    return this.http.post(url, data, { responseType: 'text' });
  }

getItems(url: string): Observable<object> {
    return this.http.get(url);
  }

  getUser() {
    this.getItems("https://localhost:44396/api/IMS/UserGet").subscribe((data:any) => {
      this.check = data;
      console.log(this.check, 'getuser')
    })
}
}
function navigateToServices() {
  throw new Error('Function not implemented.');
}

function notify(arg0: { message: string; }, arg1: string, arg2: number) {
  throw new Error('Function not implemented.');
}

