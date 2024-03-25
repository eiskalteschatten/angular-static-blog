import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import { LogoComponent } from '@/shared/components/logo/logo.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [LogoComponent, RouterModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {

}
