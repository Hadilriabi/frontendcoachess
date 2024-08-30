import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private router: Router) {}

  navigateToAddResponse1() {
    this.router.navigate(['/addresponse1']);
  }
  navigateToMyNeeds() {
    this.router.navigate(['/addNeeds']);
  }

  navigateToMessage() {
    this.router.navigate(['/chat']);
  }
  navigateToCall() {
    this.router.navigate(['/calendar']);
  }
  navigateTopost() {
    this.router.navigate(['/Allposts']);
  }
  navigateToapp() {
    this.router.navigate(['/addapp']);
  }

}
