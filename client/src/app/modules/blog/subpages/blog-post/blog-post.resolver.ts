import { ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot } from '@angular/router';
import { inject } from '@angular/core';

import { BlogPost } from '@/shared/types/blog.interface';
import { BlogService } from '@/shared/services/blog.service';

export const BlogPostResolver: ResolveFn<BlogPost | undefined> = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot,
  blogService: BlogService = inject(BlogService)
): Promise<BlogPost | undefined> => {
  return blogService.getSinglePost(route.params['postSlug']);
};
