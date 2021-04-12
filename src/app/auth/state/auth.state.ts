

// tslint:disable-next-line:no-empty-interface
import {User} from '../../models/user.models';

export interface AuthState {
  user: User | null;
}

export const initialState: AuthState = {
  user: null,
};
