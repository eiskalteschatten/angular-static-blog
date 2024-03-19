import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { WordPressPost } from '../types/blog.interface';

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  private postsUrl = 'https://blog.alexseifert.com/wp-json/wp/v2/posts?per_page=3&status=publish';
  private postsUrlWithFields = `${this.postsUrl}&_fields[]=id&_fields[]=title&_fields[]=excerpt&_fields[]=link&_fields[]=jetpack_featured_media_url&_fields[]=date&_fields[]=modified`;

  posts: WordPressPost[] = [];

  constructor(
    private http: HttpClient
  ) { }

  getPosts(): void {
    this.http.get<WordPressPost[]>(this.postsUrlWithFields).subscribe((data) => {
      this.posts = data;
    });
  }
}
