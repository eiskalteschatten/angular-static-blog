import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MobileMenuServiceService {
  menuIsOpen = false;

  constructor() { }

  toggleMenu(): void {
    this.menuIsOpen = !this.menuIsOpen;
  }
}
