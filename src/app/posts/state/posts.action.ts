import {createAction, createReducer, props} from '@ngrx/store';
import {Posts} from '../../models/posts.models';

export const ADD_POST_ACTION = '[posts page] add post';

export const addPost = createAction(ADD_POST_ACTION, props<{post: Posts }>());
