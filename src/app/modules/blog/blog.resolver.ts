import { ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot } from '@angular/router';
import { inject } from '@angular/core';

import { BlogPostMetaData } from '@/shared/types/blog.interface';
import { BlogService } from '@/shared/services/blog.service';

export const BlogResolver: ResolveFn<BlogPostMetaData[]> = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot,
  blogService: BlogService = inject(BlogService)
): Promise<BlogPostMetaData[]> => {
  return blogService.getAllBlogPostMetaData();
};
