import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import {CounterState} from '../state/counter.state';
import {changeWebName, customIncrement} from '../state/counter.action';

@Component({
  selector: 'app-custom-counter-input',
  templateUrl: './custom-counter-input.component.html',
  styleUrls: ['./custom-counter-input.component.css']
})
export class CustomCounterInputComponent implements OnInit {

  count: number;
  webName: string;
  constructor(private store: Store<{counter: CounterState}>) { }

  ngOnInit(): void {
    this.store.select('counter').subscribe((data => {
      this.webName = data.web;
    })
    );
  }

  onAdd(): void{
    this.store.dispatch(customIncrement({count: +this.count}));
  }


  OnChangeWebName(): void{
    this.store.dispatch(changeWebName());

  }
}
