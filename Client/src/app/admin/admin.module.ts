import { AdminHomeComponent } from './admin-home/admin-home.component';
import { RestaurantCreateComponent } from './restaurant-create/restaurant-create.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RestaurantEditComponent } from './restaurant-edit/restaurant-edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [RestaurantCreateComponent, AdminHomeComponent, RestaurantEditComponent],
  imports: [
    CommonModule, FormsModule, ReactiveFormsModule
  ]
})
export class AdminModule { }
