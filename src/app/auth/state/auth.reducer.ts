import {createReducer, on} from '@ngrx/store';
import {initialState} from './auth.state';
import {loginSuccess, signupSuccess} from './auth.action';


// tslint:disable-next-line:variable-name
const _authReducer = createReducer(
  initialState,
  on(loginSuccess, (state, action) => {
    console.log(action);
    return {
      ...state,
      user: action.user,

    };
  }),
  on(signupSuccess, (state, action) => {
    return {
      ...state,
      user: action.user,
    };
  }),
  );

export function AuthReducer(state, action): any {
  return _authReducer(state, action);
}
