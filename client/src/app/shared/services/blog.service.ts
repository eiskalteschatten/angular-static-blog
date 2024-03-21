import { Injectable } from '@angular/core';

import { BlogPost } from '../types/blog.interface';

import { directusClient } from '@/directusClient';

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  async getPosts(): Promise<BlogPost[]> {
    const blogPosts = await directusClient.query<BlogPost[]>(`
      query {
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
          categories {
            name
            slug
          }
          tags
        }
      }
    `);

    return blogPosts;
  }
}
