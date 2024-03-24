import { Injectable } from '@angular/core';

import { BlogPost, BlogPostMetaData, BlogCategory } from '@/shared/types/blog.interface';
import blogPostIds from '@/data/blog/posts';


@Injectable({
  providedIn: 'root',
})
export class BlogService {
  async getAllBlogPostMetaData(): Promise<BlogPostMetaData[]> {
    const allPostsData: BlogPostMetaData[] = [];

    for (const blogPostId of blogPostIds) {
      const metaData = await import (`../../data/blog/posts/${blogPostId}/meta.json`);
      allPostsData.push(metaData);
    }

    allPostsData.sort((a, b) => a.publishedDate > b.publishedDate ? -1 : 1);

    return allPostsData;
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
