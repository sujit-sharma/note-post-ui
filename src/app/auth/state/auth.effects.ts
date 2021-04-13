import {Injectable} from '@angular/core';
import {act, Actions, createEffect, ofType} from '@ngrx/effects';
import {AuthService} from '../../service/auth.service';
import {autoLogin, loginStart, loginSuccess, signupStart, signupSuccess} from './auth.action';
import {catchError, exhaustMap, map, mergeMap, tap} from 'rxjs/operators';
import {AppState} from '../../store/app.state';
import {Store} from '@ngrx/store';
import {of} from 'rxjs';
import {setErrorMessage, setLoadingSpinner} from '../../store/shared/shared.actions';
import {Router} from '@angular/router';


@Injectable()
export class AuthEffects {
  constructor(private action$: Actions,
              private authService: AuthService,
              private store: Store<AppState>,
              private router: Router
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
           this.authService.persistUser(user);
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
  loginRedirect$ = createEffect(
    () => {
      return this.action$.pipe(
        ofType(...[loginSuccess, signupSuccess]),
        tap((action) => {
          this.store.dispatch(setErrorMessage({message: ''}));
          this.router.navigate(['/']);
        })
      );
    },
    {dispatch: false }
  );
  signUp$ = createEffect(() => {
    return this.action$.pipe(
      ofType(signupStart),
      exhaustMap((action) => {
        return this.authService.signUp(action.email, action.password).pipe(
          map((data) => {
            this.store.dispatch(setLoadingSpinner({status: false}));
            const user = this.authService.formatUser(data);
            this.authService.persistUser(user);
            return signupSuccess({user});
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
  autoLogin$ = createEffect(() => {
    return this.action$.pipe(
      ofType(autoLogin),
      map((action) => {
        const user = this.authService.getPersistUser();
        console.log(user);
      })
    );

  },
    {dispatch: false}
    );
}
