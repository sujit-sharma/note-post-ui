import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Posts} from '../../models/posts.models';
import {Store} from '@ngrx/store';
import {AppState} from '../../store/app.state';
import {addPost} from '../state/posts.action';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {
  form: FormGroup;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      title: new FormControl(null, [
        Validators.required,
        Validators.minLength(5),

      ]),
      description: new FormControl(null, [
        Validators.required,
        Validators.maxLength(50),
        Validators.minLength(8),
      ])
    });
  }

  onAddPost(): void {
    if ((!this.form.valid)){
      return;
    }
    const post: Posts = {
      title: this.form.value.title,
      description: this.form.value.description,
    };
    this.store.dispatch(addPost({post}));
  }

  showDescriptionErrors(): string {
    const descriptionForm =  this.form.get('description');
    if (descriptionForm.touched && !descriptionForm.valid){
      if (descriptionForm.errors.required) {
        return 'Description is Required';
      }
      if (descriptionForm.errors.minLength){
        return 'Description should minimum 8 characters';
      }
    }
  }
}
