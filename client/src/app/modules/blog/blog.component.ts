import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { WordPressPost } from '@/shared/types/blog.interface';
import { PageTitleComponent } from '@/shared/components/page-title/page-title.component';

@Component({
  selector: 'app-blog',
  standalone: true,
  templateUrl: './blog.component.html',
  imports: [PageTitleComponent],
  styleUrl: './blog.component.scss',
})
export class BlogComponent implements OnInit {
  posts: WordPressPost[] = [];

  constructor(
    private activedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.activedRoute.data.subscribe(({ posts }) => {
      this.posts = posts;
    });
  }
}
