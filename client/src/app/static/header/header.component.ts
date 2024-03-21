import { Component } from '@angular/core';

import { LogoComponent } from '@/shared/components/logo/logo.component';

import { MainNavComponent } from '../main-nav/main-nav.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [LogoComponent, MainNavComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {

}
