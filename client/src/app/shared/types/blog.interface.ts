export interface BlogPost {
  id: number;
  title: string;
  slug: string;
  post: {
    time: number;
    blocks: BlogPostBlock[];
  };
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

export interface BlogPostBlock {
  id: string;
  type: string;
  data: {
    text?: string;
    code?: string;
    level?: number;
    file?: BlogPostFile;
    caption?: string;
    withBorder?: boolean;
    stretched?: boolean;
    withBackground?: boolean;
    alignment?: string;
    style?: string;
    items?: BlogCheckListItem[];
  };
}

interface BlogPostFile {
  width: number;
  height: number;
  size: number;
  name: string;
  title: string;
  extension: string;
  fileId: string;
  fileURL: string;
  url: string;
}

interface BlogCheckListItem {
  content?: string;
  items?: {
    content?: string;
    text?: string;
    checked?: boolean;
    items?: BlogCheckListItem[];
  }[];
  text?: string;
  checked?: boolean;
}
