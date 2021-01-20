import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Restaurant } from './../../../models/restaurants';
import { RestaurantService } from './../../services/restaurant.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-restaurant-details',
  templateUrl: './restaurant-details.component.html',
  styleUrls: ['./restaurant-details.component.css']
})
export class RestaurantDetailsComponent implements OnInit {
  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
restaurant = new Restaurant();
  constructor(private restaurantService: RestaurantService, private router:Router, private activeRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activeRoute.params.pipe(map(p => p.id)).subscribe(id=>{
      console.log(id);
      this.restaurantService.getRestaurant(id)
    .subscribe(data =>{
      console.log(data);
    });
    });
    
  }

}
