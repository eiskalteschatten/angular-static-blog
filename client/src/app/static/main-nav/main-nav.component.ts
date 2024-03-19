import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavigationEnd, Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-main-nav',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './main-nav.component.html',
  styleUrl: './main-nav.component.scss'
})
export class MainNavComponent {
  currentRoute = '/';

  constructor(
    private router: Router
  ) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.currentRoute = event.url;
      }
    });
  }
}
