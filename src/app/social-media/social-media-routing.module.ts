import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { PostListComponent } from '../social-media/components/post-list/post-list.component';
import { PostsResolver } from './resolver/posts.resolver';

const routes: Routes = [
  { path: '', component: PostListComponent, resolve: { posts: PostsResolver } }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SocialMediaRoutingModule { }
