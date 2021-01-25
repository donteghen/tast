import { HomeComponent } from './ui/home/home.component';
import { RestaurantDetailsComponent } from './ui/restaurant-details/restaurant-details.component';
import { RestaurantComponent } from './ui/restaurant/restaurant.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path:'admin', 
  loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)},
  {path:'home', component:HomeComponent},
  {path:'restaurants', component:RestaurantComponent},
  {path:'restaurants/:id', component:RestaurantDetailsComponent},
  {path:'', pathMatch:'full', redirectTo:'/restaurants'},
  {path:'**', redirectTo:'/restaurants'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
