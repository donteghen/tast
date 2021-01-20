import { RestaurantDetailsComponent } from './ui/restaurant-details/restaurant-details.component';
import { RestaurantComponent } from './ui/restaurant/restaurant.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path:'restaurants', component:RestaurantComponent},
  {path:'restaurants/:id', component:RestaurantDetailsComponent},
  {path:'', pathMatch:'full', redirectTo:'/restaurants'},
  {path:'**', component:RestaurantComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
