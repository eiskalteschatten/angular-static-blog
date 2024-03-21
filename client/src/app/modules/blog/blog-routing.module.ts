import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BlogComponent } from './blog.component';
import { BlogResolver } from './blog.resolver';
import { BlogPostComponent } from './subpages/blog-post/blog-post.component';
import { BlogPostResolver } from './subpages/blog-post/blog-post.resolver';

const routes: Routes = [
  {
    path: '',
    title: 'Blog',
    component: BlogComponent,
    resolve: { posts: BlogResolver },
  },
  {
    path: ':postSlug',
    title: 'Post',
    component: BlogPostComponent,
    resolve: { post: BlogPostResolver },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BlogRoutingModule { }
