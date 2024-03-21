export interface BlogPost {
  id: number;
  status: string;
  title: string;
  slug: string;
  post: string;
  excerpt?: string;
  featuredImage?: string;
  'date_published': string;
  'user_created': number;
  'user_updated': number;
  categories?: {
    'categories_id': BlogCategory;
  }[];
  tags?: string[];
}

export interface BlogCategory {
  name: string;
  slug: string;
}
