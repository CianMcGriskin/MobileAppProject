import { Component } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  
  private data:any = []
  constructor(private http: HttpClient) {
    let test:any = 'test';
  }
  
  getData(){
    const url ='https://jsonplaceholder.typicode.com/photos?albumId=1'
    this.http.get(url).subscribe((res)=>{
      this.data = res
      console.log(this.data)
    })
  }
}
