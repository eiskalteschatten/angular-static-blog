export interface WordPressPost {
  id: number;
  jetpack_featured_media_url: string;
  link: string;
  title: {
    rendered: string;
  };
  excerpt: {
    rendered: string;
  };
  date: string;
  modified: string;
}
