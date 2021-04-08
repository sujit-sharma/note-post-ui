import { Posts } from '../../models/posts.models';

export interface PostsState {
  posts: Posts[];
}

export const initialState: PostsState = {
  posts: [
    {id : '1', title: 'Sample Title', description: 'sample Description'},
    {id : '2', title: 'Jungle House', description: 'A lady stay in a Jungle house'}
  ]
};

