import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MarkdownComponent } from 'ngx-markdown';

import { BlogPost } from '@/shared/types/blog.interface';
import { PageTitleComponent } from '@/shared/components/page-title/page-title.component';
import { PageNotFoundComponent } from '@/shared/components/page-not-found/page-not-found.component';
import { TitleService } from '@/shared/services/title.service';

@Component({
  selector: 'app-blog-post',
  standalone: true,
  imports: [PageTitleComponent, PageNotFoundComponent, MarkdownComponent],
  templateUrl: './blog-post.component.html',
  styleUrl: './blog-post.component.scss',
})
export class BlogPostComponent implements OnInit {
  post?: BlogPost;

  constructor(
    private activedRoute: ActivatedRoute,
    private titleService: TitleService
  ) {}

  ngOnInit() {
    this.activedRoute.data.subscribe(({ post }) => {
      this.post = post;
      this.titleService.setTitle(post.metaData.title);
    });
  }
}
