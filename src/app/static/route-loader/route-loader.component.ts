import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-route-loader',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './route-loader.component.html',
  styleUrl: './route-loader.component.scss',
})
export class RouteLoaderComponent {
  pageIsLoading = false;
  barWidth = 0;

  private widthInterval?: NodeJS.Timeout;

  constructor(
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: object
  ) {
    this.router.events.subscribe((event) => {
      if (isPlatformBrowser(this.platformId)) {
        if (event instanceof NavigationStart) {
          if (this.widthInterval) {
            clearInterval(this.widthInterval);
          }

          this.pageIsLoading = true;
          this.barWidth = 50;

          this.widthInterval = setInterval(() => {
            this.barWidth = this.barWidth + 50;

            if (this.barWidth > screen.width) {
              clearInterval(this.widthInterval);
            }
          }, 500);
        }
        else if (event instanceof NavigationEnd) {
          this.pageIsLoading = false;
          this.barWidth = 0;

          if (this.widthInterval) {
            clearInterval(this.widthInterval);
          }
        }
      }
    });
  }
}
