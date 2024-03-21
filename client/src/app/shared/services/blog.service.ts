import { Injectable } from '@angular/core';

import { directusClient } from '@/directusClient';

import { BlogCategory, BlogPost } from '../types/blog.interface';


interface BlogPostsSchema {
  blogPosts: BlogPost[];
}

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
    const { blogPosts } = await directusClient.query<BlogPostsSchema>(`
      query GetBlogPosts {
        blogPosts(sort: ["-date_published"], filter: { status: { _eq: "published" } }) {
          title
          slug
          excerpt
          featuredImage
          date_published
          user_created
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

  async getSinglePost(slug: string): Promise<BlogPost> {
    const { blogPosts } = await directusClient.query<BlogPostSchema>(`
      query GetBlogPost {
        blogPosts(filter: { slug: { _eq: "${slug}" } }) {
          title
          slug
          post
          excerpt
          featuredImage
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

    // TODO: what happens if the post can't be found?

    return blogPosts[0];
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
