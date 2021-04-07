import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter/counter.component';
import { CounterOutputComponent } from './counter/counter-output/counter-output.component';
import { CounterButtonsComponent } from './counter/counter-buttons/counter-buttons.component';
import {StoreModule} from '@ngrx/store';
import {counterReducer} from './counter/state/counter.reducer';
import { CustomCounterInputComponent } from './counter/custom-counter-input/custom-counter-input.component';
import {FormsModule} from '@angular/forms';
import { HomeComponent } from './home/home.component';
import {AppRoutingModule} from './app-routing.module';
import { HeaderComponent } from './shared/component/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    CounterOutputComponent,
    CounterButtonsComponent,
    CustomCounterInputComponent,
    HomeComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule, StoreModule.forRoot({counter: counterReducer}), FormsModule, AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
