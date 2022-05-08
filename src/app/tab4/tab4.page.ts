import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {
  private DataArray:any = [];
  currentCustomer = 'null';
  currencyIcon = 'null';
  cryptoPrice = 'null';
  constructor(private http: HttpClient) {
     const url = 'https://api.coinstats.app/public/v1/coins?skip=0&limit=5&currency=EUR';
    this.http.get(url).subscribe((res)=>{
    this.DataArray = res;
    console.log(this.DataArray.coins[4]);
    this.currentCustomer = this.DataArray.coins[4].name;
    this.currencyIcon = this.DataArray.coins[4].icon;
    this.cryptoPrice = this.DataArray.coins[4].price;
})}

  ngOnInit() {
  }

}
