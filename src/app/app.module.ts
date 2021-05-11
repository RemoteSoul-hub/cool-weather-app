import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< HEAD

import { HomeComponent } from './components/home/home.component';
import { CardsComponent } from './components/cards/cards.component';
import {HttpClientModule} from '@angular/common/http';
import {environment} from '../environments/environment';
import {FormsModule} from '@angular/forms';
import {NguiAutoCompleteModule} from '@ngui/auto-complete';
import { ServiceWorkerModule } from '@angular/service-worker';
import { DetailsComponent } from './components/details/details.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CardsComponent,
    DetailsComponent
=======

@NgModule({
  declarations: [
    AppComponent
>>>>>>> parent of 9a5111e (home component and cards ui implemented + routing to home)
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NguiAutoCompleteModule,
    FormsModule,
    ServiceWorkerModule.register('ngsw-worker.js', {enabled: environment.production})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
