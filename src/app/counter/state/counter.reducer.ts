import {initialState} from './counter.state';
import {createReducer, on, props} from '@ngrx/store';
import {increment, decrement, reset, customIncrement, changeWebName} from './counter.action';
import {log} from 'util';

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
  }),
  on(customIncrement, (state, action ) => {
    return {
      ...state,
      counter: state.counter + action.count,
    };
  }),
  on(changeWebName, (state) => {
    return {
      ...state,
      web: 'Modified Software Engineer',
    };
  })
);

export function counterReducer(state, action): any {
  return _counterReducer(state, action);
}
