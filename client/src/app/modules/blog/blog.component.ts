import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { BlogService } from '../../shared/services/blog.service';
import { WordPressPost } from '../../shared/types/blog.interface';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [],
  providers: [BlogService, HttpClientModule],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.scss',
})
export class BlogComponent implements OnInit {
  constructor(
    private blogService: BlogService
  ) {}

  ngOnInit() {
    this.blogService.getPosts();
  }

  get posts(): WordPressPost[] {
    return this.blogService.posts;
  }
}
