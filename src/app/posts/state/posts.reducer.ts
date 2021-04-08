import {createReducer, on} from '@ngrx/store';
import {initialState} from './posts.state';
import {addPost, deletePost, updatePost} from './posts.action';

// tslint:disable-next-line:variable-name
const _postsReducer = createReducer(
  initialState,
  on(addPost, (state, action ) => {
    const post = {...action.post};
    post.id = (state.posts.length + 1).toString();
    return {
      ...state,
      posts: [...state.posts, post]
    };

  }),
  on(updatePost, (state, action) => {
    const updatedPost = state.posts.map((post) => {
      return action.post.id === post.id ? action.post : post;
    });
    return {
      ...state,
      posts: updatedPost,
    };
  }),
  on(deletePost, (state, {id} ) => {
    const updatedPosts = state.posts.filter(post => {
      return post.id !== id;
    });
    return {
      ... state,
      posts: updatedPosts,
    };

  })
  );


export function postsReducer(state, action): any {
  return _postsReducer(state, action);
}
