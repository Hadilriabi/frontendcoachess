import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  constructor(private router: Router) {}

  navigateToAddResponse1() {
    this.router.navigate(['/needs']);
  }
  navigateToforms() {
    this.router.navigate(['/forms']);
  }
  navigateToPosts() {
    this.router.navigate(['/Allposts']);
  }

}
