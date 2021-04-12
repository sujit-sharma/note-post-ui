import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {AuthService} from '../../service/auth.service';
import {loginStart, loginSuccess} from './auth.action';
import {catchError, map, mergeMap} from 'rxjs/operators';
import {AppState} from '../../store/app.state';
import {Store} from '@ngrx/store';
import {of} from 'rxjs';
import {setErrorMessage, setLoadingSpinner} from '../../store/shared/shared.actions';


@Injectable()
export class AuthEffects {
  constructor(private action$: Actions,
              private authService: AuthService,
              private store: Store<AppState>
  ) {}

 // @ts-ignore
  login$ = createEffect(() => {
   return this.action$.pipe(ofType(loginStart), mergeMap((acts) => {
     return this.authService.login(acts.email, acts.password)
       .pipe(
         map((data) => {
           this.store.dispatch(setLoadingSpinner({ status: false}));
           this.store.dispatch(setErrorMessage({ message: ''}));
           const user = this.authService.formatUser(data);
           return loginSuccess({user});
         }),
         catchError((err => {
           this.store.dispatch(setLoadingSpinner({ status: false}));
           console.log(err.error.error.message);
           const errorMessage = this.authService.getErrorMessage(err.error.error.message);
           return of(setErrorMessage({message: errorMessage}));
         }))
       );
   })
   );
 });
}
