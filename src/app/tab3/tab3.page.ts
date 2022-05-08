import { Component } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  private DataArray:any = [];
  currentCustomer = 'null';
  currencyIcon = 'null';
  cryptoPrice = 'null';

  constructor(private http: HttpClient) {
    const url = 'https://api.coinstats.app/public/v1/coins?skip=0&limit=5&currency=EUR';
     this.http.get(url).subscribe((res)=>{
       this.DataArray = res;
       console.log(this.DataArray.coins[1]);
       this.currentCustomer = this.DataArray.coins[1].name;
       this.currencyIcon = this.DataArray.coins[1].icon;
       this.cryptoPrice = this.DataArray.coins[1].price;
   })
  }

}
