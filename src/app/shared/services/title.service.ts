import { Injectable, inject } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root',
})
export class TitleService {
  private titleService = inject(Title);
  private defaultTitle = 'Angular Static Blog';

  constructor() { }

  setTitle(title?: string): void {
    const finalTitle = title ? `${title} | ${this.defaultTitle}` : this.defaultTitle;
    this.titleService.setTitle(finalTitle);
  }
}
