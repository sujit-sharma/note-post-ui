import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {Store} from '@ngrx/store';
import {decrement, increment, reset} from '../state/counter.action';
import {CounterState} from '../state/counter.state';
import {AppState} from '../../store/app.state';

@Component({
  selector: 'app-counter-buttons',
  templateUrl: './counter-buttons.component.html',
  styleUrls: ['./counter-buttons.component.css']
})
export class CounterButtonsComponent implements OnInit {
  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
  }
  onIncrement(): void {
    this.store.dispatch(increment());
  }
  onDecrement(): void {
    this.store.dispatch(decrement());
  }
  onReset(): void {
    this.store.dispatch(reset());
  }

}
