import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RestaurantComponent } from './ui/restaurant/restaurant.component';
import { RestaurantDetailsComponent } from './ui/restaurant-details/restaurant-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from '@angular/common/http'
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AppComponent,
    RestaurantComponent,
    RestaurantDetailsComponent
  ],
  imports: [
    BrowserModule, 
    AppRoutingModule, FormsModule, ReactiveFormsModule, CommonModule, HttpClientModule, NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
