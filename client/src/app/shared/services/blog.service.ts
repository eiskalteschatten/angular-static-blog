import { Injectable } from '@angular/core';

import { BlogPost } from '../types/blog.interface';

import { directusClient } from '@/directusClient';

interface BlogPostSchema {
  blogPosts: BlogPost[];
}

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  async getPosts(): Promise<BlogPost[]> {
    const { blogPosts } = await directusClient.query<BlogPostSchema>(`
      query GetBlogPosts {
        blogPosts {
          id
          status
          title
          slug
          post
          excerpt
          date_published
          user_created
          user_updated
          tags
        }
      }
    `);

    return blogPosts;
  }
}
