import {Component, Input, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {CounterState} from '../state/counter.state';
import {Observable, Subscription} from 'rxjs';
import {getCounter} from '../state/counter.selectors';
import {AppState} from '../../store/app.state';

@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.css']
})
export class CounterOutputComponent implements OnInit {
  counter: number;
  counter$: Observable<number>;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.counter$ = this.store.select(getCounter);
  }
}
