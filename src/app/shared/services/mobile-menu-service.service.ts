import { Injectable, inject } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class MobileMenuServiceService {
  menuIsOpen = false;

  private router = inject(Router);

  constructor() {
    this.router.events.subscribe(value => {
      if (value instanceof NavigationEnd) {
        this.menuIsOpen = false;
      }
    });
  }

  toggleMenu(): void {
    this.menuIsOpen = !this.menuIsOpen;

    if (this.menuIsOpen) {
      document.body.classList.add('mobile-menu-open');
    }
    else {
      document.body.classList.remove('mobile-menu-open');
    }
  }
}
