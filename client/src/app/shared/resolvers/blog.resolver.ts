import { ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot } from '@angular/router';
import { inject } from '@angular/core';
import { Observable } from 'rxjs';

import { WordPressPost } from '../types/blog.interface';
import { BlogService } from '../services/blog.service';

export const BlogResolver: ResolveFn<WordPressPost[]> = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot,
  blogService: BlogService = inject(BlogService)
): Observable<WordPressPost[]> => {
  return blogService.getPosts();
};
