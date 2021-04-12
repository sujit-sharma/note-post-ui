import {createReducer} from '@ngrx/store';
import {initialState} from './auth.state';


// tslint:disable-next-line:variable-name
const _authReducer = createReducer(initialState);

export function AuthReducer(state, action): any {
  return _authReducer(state, action);
}
