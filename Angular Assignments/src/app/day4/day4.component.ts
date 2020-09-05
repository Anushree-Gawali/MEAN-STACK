import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-day4',
  templateUrl: './day4.component.html',
  styleUrls: ['./day4.component.css']
})
export class Day4Component implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  gotoday1(page) {
    this.router.navigate(['Day4']);
  }

}
