import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationEnd, Router } from '@angular/router';

import { MobileMenuServiceService } from '@/shared/services/mobile-menu-service.service';

@Component({
  selector: 'app-mobile-menu-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mobile-menu-button.component.html',
  styleUrl: './mobile-menu-button.component.scss',
})
export class MobileMenuButtonComponent {
  private ICON_MENU = 'menu';
  private ICON_CLOSE = 'close';

  icon = this.ICON_MENU;
  shouldAnimateIcon = false;

  constructor(
    private mobileMenuService: MobileMenuServiceService,
    private router: Router
  ) {
    this.router.events.subscribe(value => {
      if (value instanceof NavigationEnd) {
        this.icon = this.ICON_MENU;
        this.shouldAnimateIcon = false;
      }
    });
  }

  mobileMenuClick(): void {
    this.icon = this.icon === this.ICON_MENU ? this.ICON_CLOSE : this.ICON_MENU;
    this.shouldAnimateIcon = true;
    this.mobileMenuService.toggleMenu();
    setTimeout(() => this.shouldAnimateIcon = false, 500);
  }

  get menuIsOpen(): boolean {
    return this.mobileMenuService.menuIsOpen;
  }
}
