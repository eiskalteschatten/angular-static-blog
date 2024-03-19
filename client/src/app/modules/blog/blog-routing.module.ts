import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BlogComponent } from './blog.component';
import { BlogResolver } from './blog.resolver';

const routes: Routes = [
  {
    path: '',
    title: 'Blog',
    component: BlogComponent,
    resolve: { posts: BlogResolver },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BlogRoutingModule { }
