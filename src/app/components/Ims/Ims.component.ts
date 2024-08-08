import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { catchError, Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { error } from 'console';

@Component({
  selector: 'app-Ims',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './Ims.component.html',
  styleUrl: './Ims.component.css',
  preserveWhitespaces: true
})
export class ImsComponent {
  @ViewChild('stocklist') structure: ElementRef | undefined;
  @ViewChild('itemlist') structure1: ElementRef | undefined;
  @ViewChild('purchaselist') structure2: ElementRef | undefined;
  array: any = {
    ItemName: '',
  }
  st: any = []

  list: any = {
    ItemID: '',
    Mrp: '',
    PurchaseCost: '',
    BatchID: '',
    SItems: '',
    ExpiryDate: ''
  }
  arr: any = {

    ItemID:'',
    Pdate: new Date(),
    PItems: '',
    PurchaseID: ''
  }
  datevalu: any = new Date();
  back: any = [];
  front: any = [];
  constructor(private http: HttpClient) {

  }
  scrolltoStructure(param:any)
  {
    if(param=='stocklist')
    {
      this.structure?.nativeElement.scrollIntoView({behavior:'smooth'});
    }
    else if(param=='itemlist'){
      this.structure1?.nativeElement.scrollIntoView({behavior:'smooth'});
    }
    else{
      this.structure2?.nativeElement.scrollIntoView({behavior:'smooth'});
    }
    
  }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.getItem();
    this.getStock();
    this.getPurchase();
  }

  submit(array: any, type: any) {

    this.addItems('https://localhost:44396/api/IMS/' + type, array)
      .subscribe(
        items => {
          console.log(items);
          if (type == 'PostItem') {
            this.getItem();
          }
          else if (type == 'PostStock') {
            this.getStock();
          }
          else if (type == 'PostPurchase') {
            this.getPurchase();
          }
        });
  }

  addItems(url: string, data: any): Observable<string> {
    return this.http.post(url, data, { responseType: 'text' });
  }
  getItems(url: string): Observable<object> {
    return this.http.get(url);
  }


getItem() {  
  this.getItems("https://localhost:44396/api/IMS/ItemGet").pipe(catchError(error => { console.error('Error occurred:', error); return of([]); })).subscribe({ next: (data:any) => { console.log('Data received:', data);
    this.st = data;
   }, error: (error:any) => { console.error('Error occurred:', error); }, complete: () => { console.log('Observable completed'); } });

  // this.getItems("https://localhost:44396/api/IMS/ItemGet").subscribe(data => {
  //   this.st = data;
  //   console.log(this.st, 'getitem')
  // })
}
getStock() {
  this.getItems("https://localhost:44396/api/IMS/StockGet").subscribe(data => {
    this.front = data;
    console.log(this.front, 'getstock')
  })

}
getPurchase() {
  this.getItems("https://localhost:44396/api/IMS/PurchaseGet").subscribe(data => {
    this.back = data;
    console.log(this.back, 'getpurchase')
  })
}
  }
