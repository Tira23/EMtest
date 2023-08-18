import {inject, NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PostsComponent} from "./components/posts/posts.component";
import {PostComponent} from "./components/post/post.component";
import {AuthComponent} from "./components/auth/auth.component";
import {NotFoundComponent} from "./components/not-found/not-found.component";
import {AuthGuard} from "./guards/auth.guard";


const routes: Routes = [
  {
    path: '',
    component: AuthComponent,
    title: 'Auth page'
  },
  {
    path: 'posts',
    component: PostsComponent,
    title: 'Posts page',
    canActivate: [()=> inject(AuthGuard).canActivate()],

  },
  {
    path: 'post/:id',
    component: PostComponent,
    title: 'Details page',
    canActivate: [()=> inject(AuthGuard).canActivate()],

  },
  {
    path: '**',
    component: NotFoundComponent,
    title: 'NotFound page',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
