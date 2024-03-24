export interface BlogPostMetaData {
  id: string;
  title: string;
  author: string;
  titleImage: string;
  excerpt: string;
  categories: string[];
  tags?: string[];
  publishedDate: string;
  updatedAt: string;
  metaDescription: string;
}

// TODO: expand this as necessary
export interface BlogCategory {
  name: string;
  slug: string;
}
