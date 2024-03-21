import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ContentTileData } from '@/shared/types/content.interface';
import { formatDate } from '@/shared/helpers/date';

@Component({
  selector: 'app-content-tile-horizontal',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './content-tile-horizontal.component.html',
  styleUrl: './content-tile-horizontal.component.scss',
})
export class ContentTileHorizontalComponent {
  @Input() content?: ContentTileData;

  formatDate(date: Date): string {
    return formatDate(date);
  }
}
