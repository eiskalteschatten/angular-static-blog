import { Component, OnInit } from '@angular/core';

import { TitleService } from '@/shared/services/title.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  constructor(
    private titleService: TitleService
  ) {}

  ngOnInit(): void {
    this.titleService.setTitle();
  }
}
