import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MobileMenuServiceService } from '@/shared/services/mobile-menu-service.service';

import { MainNavComponent } from '../main-nav/main-nav.component';

@Component({
  selector: 'app-mobile-menu',
  standalone: true,
  imports: [CommonModule, MainNavComponent],
  templateUrl: './mobile-menu.component.html',
  styleUrl: './mobile-menu.component.scss',
})
export class MobileMenuComponent {
  constructor(
    private mobileMenuService: MobileMenuServiceService
  ) {}

  get open(): boolean {
    return this.mobileMenuService.menuIsOpen;
  }
}
