import { Injectable } from '@angular/core';

import { BlogCategory, BlogPost } from '../types/blog.interface';


@Injectable({
  providedIn: 'root',
})
export class BlogService {
  async getAllPosts(): Promise<BlogPost[]> {
    const blogPosts: BlogPost[] = [];
    return blogPosts;
  }

  async getSinglePost(slug: string): Promise<BlogPost | undefined> {
    console.log('slug', slug);
    return undefined;
    // return blogPost;
  }

  async getAllCategories(): Promise<BlogCategory[]> {
    const categories: BlogCategory[] = [];
    return categories;
  }
}
