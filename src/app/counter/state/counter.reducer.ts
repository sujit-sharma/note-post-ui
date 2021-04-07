import {initialState} from './counter.state';
import {createReducer, on, props} from '@ngrx/store';
import {increment, decrement, reset } from './counter.action';

// tslint:disable-next-line:variable-name
const _counterReducer = createReducer(
  initialState,
  on(increment, (state) => {
    return {
      ...state,
    counter: state.counter + 1,
    };
  }),
  on(decrement, (state) => {
    return {
      ...state,
      counter: state.counter - 1,
    };
  }),
  on(reset, (state) => {
    return {
      ...state,
      counter: 0
    };
  })
);

export function counterReducer(state, action): any {
  return _counterReducer(state, action);
}
