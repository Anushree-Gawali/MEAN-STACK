import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-day1',
  templateUrl: './day1.component.html',
  styleUrls: ['./day1.component.css']
})
export class Day1Component implements OnInit {

  public list: any = [];
  constructor(private http: HttpClient) { }

  public ngOnInit() {
    console.log('ON.INIT.');
    this.makeAjaxCall();
  }
  async makeAjaxCall() {
    const url = 'https://jsonplaceholder.typicode.com/posts';
    const result = await this.http.get(url).toPromise();
    this.list = result;
  }


}
