import { RestaurantEditComponent } from './restaurant-edit/restaurant-edit.component';
import { RestaurantCreateComponent } from './restaurant-create/restaurant-create.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
    {path:'', component:AdminHomeComponent},
    {path:'restaurant', component:RestaurantCreateComponent},
    {path:'restaurants/:id', component:RestaurantEditComponent}, 
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class AdminRoutingModule { }
  