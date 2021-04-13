import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {AuthResponseData} from '../models/auth-response-data.model';
import {User} from '../models/user.models';


@Injectable({
  providedIn: 'root',
})

export class AuthService {
  constructor(private http: HttpClient) { }
  // tslint:disable-next-line:typedef
  login(email: string, password: string): Observable<AuthResponseData> {
    return this.http.post<AuthResponseData>(
      `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${environment.FIREBASE_API_KEY}`,
      { email, password, returnSecureToken: true }
    );
  }
  signUp(email: string, password: string): Observable<AuthResponseData> {
    return this.http.post<AuthResponseData>(
      `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${environment.FIREBASE_API_KEY}`,
      { email, password, returnSecureToken: true }
    );
  }
  formatUser(data: AuthResponseData ): User {
    const expirationDate = new Date(new Date().getTime() + +data.expiresIn * 1000 );
    const user = new User(data.email, data.idToken, data.localId, expirationDate);
    return user;
  }
  getErrorMessage(message: string): any {
    switch (message) {
      case 'EMAIL_NOT_FOUND':
        return 'Email does not exist';
      case 'INVALID_PASSWORD':
        return ' Invalid Password';
      case 'EMAIL_EXISTS':
        return 'Email already exist';
      default:
        return 'An error Occurred. Please try again';
    }
  }
}

