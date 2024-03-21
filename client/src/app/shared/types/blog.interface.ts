export interface BlogPost {
  id: number;
  status: string;
  title: string;
  slug: string;
  post: string;
  excerpt?: string;
  'date_published': string;
  'user_created': number;
  'user_updated': number;
  categories?: BlogCategory[];
  tags?: string[];
}

export interface BlogCategory {
  name: string;
  slug: string;
}
