import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {StoreModule} from '@ngrx/store';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HomeComponent } from './home/home.component';
import {AppRoutingModule} from './app-routing.module';
import { HeaderComponent } from './shared/component/header/header.component';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {environment} from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({}),
    FormsModule,
    AppRoutingModule,
    StoreDevtoolsModule.instrument({
      logOnly: environment.production, // Restrict extension to log-only mode
    }),
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
