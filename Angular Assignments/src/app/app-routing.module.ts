import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Day1Component } from './day1/day1.component';
import { Day2Component } from './day2/day2.component';
import { Day3Component } from './day3/day3.component';
import { Day4Component } from './day4/day4.component';
import { RegComponent } from './reg/reg.component';
import { BookingComponent } from './booking/booking.component';


const routes: Routes = [
  { path: 'Day1', component: Day1Component },
  { path: 'Day2', component:Day2Component },
  { path: 'Day3', component:Day3Component },
  { path: 'Day4', component:Day4Component },
  { path: 'Reg', component:RegComponent },
  { path: 'booking', component:BookingComponent },
  { path: '', redirectTo: '/Day1', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
