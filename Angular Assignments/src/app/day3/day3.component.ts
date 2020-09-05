import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-day3',
  templateUrl: './day3.component.html',
  styleUrls: ['./day3.component.css']
})
export class Day3Component implements OnInit {

  title = "Enter here"
  task = new FormControl();
  tasklist = [];
  addtask() {
    const val = this.task.value;
    this.tasklist.push(val);

  }

  constructor() { }

  ngOnInit(): void {
  }

}
