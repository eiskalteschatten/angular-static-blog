import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { BlogPost } from '@/shared/types/blog.interface';
import { PageTitleComponent } from '@/shared/components/page-title/page-title.component';
import { ContentTileData } from '@/shared/types/content.interface';
import { ContentTileHorizontalComponent } from '@/shared/components/content-tile-horizontal/content-tile-horizontal.component';

@Component({
  selector: 'app-blog',
  standalone: true,
  templateUrl: './blog.component.html',
  imports: [PageTitleComponent, ContentTileHorizontalComponent],
  styleUrl: './blog.component.scss',
})
export class BlogComponent implements OnInit {
  posts: BlogPost[] = [];

  constructor(
    private activedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.activedRoute.data.subscribe(({ posts }) => {
      this.posts = posts;
    });
  }

  get postsAsContentTileData(): ContentTileData[] {
    return this.posts.map((post) => ({
      title: post.title,
      excerpt: post.excerpt,
      image: post.featuredImage,
      link: `/blog/${post.slug}`,
      date: new Date(post.date_published),
    }));
  }
}
