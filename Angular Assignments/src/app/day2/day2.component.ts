import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-day2',
  templateUrl: './day2.component.html',
  styleUrls: ['./day2.component.css']
})
export class Day2Component implements OnInit {

  title = 'myapp';
  counter: number = 1;
  n: number = 9;
  list = [1, 2, 7, 4];
  list1 = ["a", "b"];
  increment() {
    this.counter += 1;
  }
  add() {
    this.list1.push("c", "d")
  }
  remove() {
    this.list1.pop();
  }

  constructor() { }

  ngOnInit(): void {
  }

}
