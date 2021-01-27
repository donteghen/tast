import { AdminRoutingModule } from './admin-routing.module';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { RestaurantCreateComponent } from './restaurant-create/restaurant-create.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RestaurantEditComponent } from './restaurant-edit/restaurant-edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbPaginationModule, NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';
import { UserComponent } from './user/user.component';
import { UserCreateComponent } from './user-create/user-create.component';
import { UserEditComponent } from './user-edit/user-edit.component';



@NgModule({
  declarations: [RestaurantCreateComponent, AdminHomeComponent, RestaurantEditComponent, 
    UserComponent, UserCreateComponent, UserEditComponent], 
  imports: [
    CommonModule, FormsModule, ReactiveFormsModule, AdminRoutingModule,NgbPaginationModule, NgbRatingModule
  ]
})
export class AdminModule { }
