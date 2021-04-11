import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {PostsListComponent} from './posts/posts-list/posts-list.component';
import {AddPostComponent} from './posts/add-post/add-post.component';
import {EditPostComponent} from './posts/edit-post/edit-post.component';


const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'counter', loadChildren: () => import('./counter/counter.module').then((m) => m.CounterModule),
  },
  {
    path: 'posts', component: PostsListComponent,
    children: [
      {path: 'add', component: AddPostComponent},
      {path: 'edit/:id', component: EditPostComponent},
      ],
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})

export class AppRoutingModule {}
