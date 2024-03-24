import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ContentTileData } from '@/shared/types/content.interface';
import { formatDate } from '@/shared/helpers/date';

import { ContentTileImagePlaceholderComponent } from '../content-tile-image-placeholder/content-tile-image-placeholder.component';

@Component({
  selector: 'app-content-tile-horizontal',
  standalone: true,
  imports: [RouterModule, ContentTileImagePlaceholderComponent],
  templateUrl: './content-tile-horizontal.component.html',
  styleUrl: './content-tile-horizontal.component.scss',
})
export class ContentTileHorizontalComponent {
  @Input() content?: ContentTileData;

  formatDate(date: Date): string {
    return formatDate(date);
  }
}
