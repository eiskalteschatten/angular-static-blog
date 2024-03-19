import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { WordPressPost } from '../../shared/types/blog.interface';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [],
  templateUrl: './blog.component.html',
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
