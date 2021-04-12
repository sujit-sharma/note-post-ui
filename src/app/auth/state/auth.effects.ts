import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {AuthService} from '../../service/auth.service';
import {loginStart, loginSuccess} from './auth.action';
import {map, mergeMap} from 'rxjs/operators';


@Injectable()
export class AuthEffects {
  constructor(private action$: Actions,
              private authService: AuthService,
  ) {}

 login$ = createEffect(() => {
   return this.action$.pipe(ofType(loginStart), mergeMap((acts) => {
     return this.authService.login(acts.email, acts.password)
       .pipe(
         map((data) => {
           console.log('login success' + JSON.stringify(data));
           return loginSuccess();
         })
       );
   })
   );
 });
}
