import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import {AppState} from '../../store/app.state';
import {Observable} from 'rxjs';
import { Posts } from '../../models/posts.models';
import {getPosts} from '../state/posts.selector';
import {Router} from '@angular/router';
import {deletePost} from '../state/posts.action';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css']
})
export class PostsListComponent implements OnInit {
  posts: Observable<Posts[]>;

  constructor(private store: Store<AppState>,
              private router: Router) { }

  ngOnInit(): void {
    this.posts = this.store.select(getPosts);
  }

  onDeletePost(id: string): void {
    if (confirm('Do you really want to delete ')) {
      this.store.dispatch(deletePost({id}));
    }
  }
}
