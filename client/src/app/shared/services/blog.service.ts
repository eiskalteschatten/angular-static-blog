import { Injectable } from '@angular/core';

import { BlogCategory, BlogPost } from '../types/blog.interface';

import { directusClient } from '@/directusClient';

interface BlogPostSchema {
  blogPosts: BlogPost[];
}

interface BlogCategorySchema {
  categories: BlogCategory[];
}

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  async getAllPosts(): Promise<BlogPost[]> {
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
          categories {
            categories_id {
              name
              slug
            }
          }
        }
      }
    `);

    return blogPosts;
  }

  async getAllCategories(): Promise<BlogCategory[]> {
    const { categories } = await directusClient.query<BlogCategorySchema>(`
      query GetBlogCategories {
        categories {
          name
          slug
        }
      }
    `);

    return categories;
  }
}
