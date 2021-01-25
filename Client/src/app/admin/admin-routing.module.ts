import { UserCreateComponent } from './user-create/user-create.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { UserComponent } from './user/user.component';
import { RestaurantEditComponent } from './restaurant-edit/restaurant-edit.component';
import { RestaurantCreateComponent } from './restaurant-create/restaurant-create.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
    {path:'', component:AdminHomeComponent},
    {path:'restaurants/:id', component:RestaurantEditComponent}, 
    {path:'restaurant', component:RestaurantCreateComponent},
    {path:'users', component:UserComponent},
    {path:'users/:id', component:UserEditComponent},
    {path:'user', component:UserCreateComponent}
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class AdminRoutingModule { }
  