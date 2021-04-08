import {createAction, createReducer, props} from '@ngrx/store';
import {Posts} from '../../models/posts.models';

export const ADD_POST_ACTION = '[posts page] add post';

export const UPDATE_POST_ACTION = '[posts page] and update post';

export const addPost = createAction(ADD_POST_ACTION, props<{post: Posts }>());

export const updatePost = createAction(UPDATE_POST_ACTION, props<{post: Posts }>());
