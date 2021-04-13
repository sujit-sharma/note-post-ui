import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {AppState} from './store/app.state';
import {Store} from '@ngrx/store';
import {getErrorMessage, getLoading} from './store/shared/shared.selector';
import {ErrorMessage} from '@angular/compiler-cli/ngcc/src/execution/cluster/api';
import {autoLogin} from './auth/state/auth.action';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ngrx-counter';
  showLoading: Observable<boolean>;
  errorMessage: Observable<string>;

  constructor(private store: Store<AppState>) {  }
  ngOnInit(): void {
    this.showLoading = this.store.select(getLoading);
    this.errorMessage = this.store.select(getErrorMessage);
    this.store.dispatch(autoLogin());

  }
}
