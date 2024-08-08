import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  st:any=[];
  front:any=[];
  dash:any=[];
  dates:any=[];
  qt:any=0;
  ex:any=0;



 
 
  constructor(private http: HttpClient, private router: Router) {
    this.getItem();
    this.getStock();
    this.getDash();
    this.getDate();
   
  }
  logout(){
    localStorage.clear();
    this.router.navigateByUrl('/Login')

  }
  navigateToServices() {
    this.router.navigate(['/Items']);
  }
  
  getItems(url: string): Observable<object> {
    return this.http.get(url);
  }
  
// getItem() {  
//   this.getItems("https://localhost:44396/api/IMS/ItemGet").pipe(catchError(error => { console.error('Error occurred:', error); return of([]); })).subscribe({ next: (data:any) => { console.log('Data received:', data);
//     this.st = data;
//    }, error: (error:any) => { console.error('Error occurred:', error); }, complete: () => { console.log('Observable completed'); } });


// }
getItem(){
  this.getItems("https://localhost:44396/api/IMS/ItemGet").subscribe(data => {

    this.st = data;
    console.log(this.dash, 'getdash')
  
  })

}
getStock() {
  this.getItems("https://localhost:44396/api/IMS/StockGet").subscribe(data => {
    this.front = data;
    console.log(this.front, 'getstock')
 
    for(var i=0; i <= this.front.length; i++ ){
      
      var ar = this.front[i];
      console.log(ar);
      this.qt = this.qt + ar.sItems;
    }
  })
 
}

getDash() {
  this.getItems("https://localhost:44396/api/IMS/DashGet").subscribe(data => {

    this.dash = data;
    console.log(this.dash, 'getdash')
  
  })
}

getDate() {
  this.getItems("https://localhost:44396/api/IMS/DateGet").subscribe(data => {

    this.dates = data;
    console.log(this.dates, 'getdate')
    for(var i=0; i<=this.dates.length; i++){
      
      this.ex = this.ex + this.dates[i].mrp* this.dates[i].sItems ;
    }
  
  })
}

// changeaction(data:any)
// {
//   this.route.navigateByUrl(data);
//   // this.route.navigateByUrl('src\app\components\Ims\Ims.component.html');
//   // this.isheader=data;
// }


}

