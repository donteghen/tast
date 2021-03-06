import { ProfileComponent } from './ui/profile/profile.component';
import { RegisterComponent } from './ui/register/register.component';
import { LoginComponent } from './ui/login/login.component';

import { RestaurantDetailsComponent } from './ui/restaurant-details/restaurant-details.component';
import { RestaurantComponent } from './ui/restaurant/restaurant.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path:'admin', 
  loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)},
  {path:'restaurants', component:RestaurantComponent},
  {path:'restaurants/:id', component:RestaurantDetailsComponent},
  {path:'login', component:LoginComponent},
  {path:'register', component:RegisterComponent},
  {path:'profile', component:ProfileComponent},
  {path:'', pathMatch:'full', redirectTo:'/restaurants'},
  {path:'**', redirectTo:'/restaurants'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
