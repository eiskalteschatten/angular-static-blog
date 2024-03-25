import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { HeaderComponent } from './static/header/header.component';
import { RouteLoaderComponent } from './static/route-loader/route-loader.component';
import { MobileMenuComponent } from './static/mobile-menu/mobile-menu.component';
import { FooterComponent } from './static/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    RouteLoaderComponent,
    MobileMenuComponent,
    FooterComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {

}
