import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {AppState} from '../../store/app.state';
import {Store} from '@ngrx/store';
import {getPostById} from '../state/posts.selector';
import {Posts} from '../../models/posts.models';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Subscription, } from 'rxjs';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent implements OnInit, OnDestroy{
  postToEdit: Posts;
  form: FormGroup;
  formSubscription: Subscription;

  constructor(private  route: ActivatedRoute,
              private store: Store<AppState>) { }

  ngOnInit(): void {
    this.formSubscription = this.route.paramMap.subscribe((params) => {
      const id  = (params.get('id'));
      this.store.select(getPostById, {id}).subscribe((data => {
        this.postToEdit = data;
        this.createForm();
      }));
    });
  }

  ngOnDestroy(): void {
    if (this.formSubscription ) {
      this.formSubscription.unsubscribe();
    }

  }
  private createForm(): void {
    this.form = new FormGroup({
      title: new FormControl(this.postToEdit.title, [
        Validators.required,
        Validators.minLength(6),
      ]),
      description: new FormControl(this.postToEdit.description, [
        Validators.required,
        Validators.minLength(10),
      ]),
    });
  }
}

