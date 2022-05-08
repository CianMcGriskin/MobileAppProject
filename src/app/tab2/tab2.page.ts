import { Component } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  private DataArray:any = [];
  currentCustomer = 'null';
  currencyIcon = 'null';
  cryptoPrice = 'null';
  constructor(private http: HttpClient) {
    const url = 'https://api.coinstats.app/public/v1/coins?skip=0&limit=5&currency=EUR';
     this.http.get(url).subscribe((res)=>{
       this.DataArray = res;
       console.log(this.DataArray.coins[0]);
       this.currentCustomer = this.DataArray.coins[0].name;
       this.currencyIcon = this.DataArray.coins[0].icon;
       this.cryptoPrice = this.DataArray.coins[0].price;
   })
  }
}
