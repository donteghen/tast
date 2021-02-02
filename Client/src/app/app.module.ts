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
import { HomeComponent } from './ui/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {CarouselModule} from 'primeng/carousel';
import {ButtonModule} from 'primeng/button';
import {ToastModule} from 'primeng/toast';
import {RatingModule} from 'primeng/rating';
import {CheckboxModule} from 'primeng/checkbox';
import {SidebarModule} from 'primeng/sidebar';
import {ScrollPanelModule} from 'primeng/scrollpanel';
import {ToolbarModule} from 'primeng/toolbar';
import {SplitButtonModule} from 'primeng/splitbutton';
import { LoginComponent } from './ui/login/login.component';
import { RegisterComponent } from './ui/register/register.component';
import { ProfileComponent } from './ui/profile/profile.component';


@NgModule({
  declarations: [
    AppComponent,
    RestaurantComponent,
    RestaurantDetailsComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule, 
    AppRoutingModule, FormsModule, ReactiveFormsModule, CommonModule, HttpClientModule, NgbModule,
     ToolbarModule, SplitButtonModule,
     BrowserAnimationsModule, CarouselModule, ButtonModule, ToastModule, RatingModule, CheckboxModule, SidebarModule, 
     ScrollPanelModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
