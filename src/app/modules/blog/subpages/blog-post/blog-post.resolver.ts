import { ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot } from '@angular/router';
import { inject } from '@angular/core';

import { BlogPostMetaData } from '@/shared/types/blog.interface';
import { BlogService } from '@/shared/services/blog.service';

export const BlogPostResolver: ResolveFn<BlogPostMetaData | undefined> = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot,
  blogService: BlogService = inject(BlogService)
): Promise<BlogPostMetaData | undefined> => {
  return blogService.getSinglePostMetaData(route.params['postSlug']);
};
