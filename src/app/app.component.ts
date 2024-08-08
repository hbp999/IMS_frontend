import { Component } from '@angular/core';
import { NavigationEnd, Route, RouterOutlet } from '@angular/router';
import { ImsComponent } from "./components/Ims/Ims.component";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ImageComponent } from './components/image/image.component';
import { Router } from '@angular/router';
import { ContactComponent } from './components/contact/contact.component';
import { filter } from 'rxjs';




@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ImsComponent, CommonModule, FormsModule,ImageComponent,ContactComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  isheader:any='';
  isLogin: boolean= false;
  title = 'IMSProject';
  constructor(private route:Router){
    route.events.pipe(
      filter((event: any) => event instanceof NavigationEnd)
  )
      .subscribe(event => {
          if(event.url=='/Login'||event.url=='/Register'){
            this.isLogin = true;
          }
          else{
            this.isLogin=false;
          }
      });

  }

  changeaction(data:any)
  {
    this.route.navigateByUrl(data);
    // this.route.navigateByUrl('src\app\components\Ims\Ims.component.html');
    // this.isheader=data;
  }

}
