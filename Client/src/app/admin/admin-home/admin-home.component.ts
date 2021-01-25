import { RestaurantService } from 'src/app/services/restaurant.service';
import { Component, OnInit } from '@angular/core';
import { Restaurant } from 'src/models/restaurants';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {
  retaurantView:Restaurant[];
  restaurants:Restaurant[];
  rating:number=3;
collection:number;
page:number=1;
pageSize:number=4;


  constructor(private restaurantService:RestaurantService) { }

  ngOnInit(): void {
    this.getRestaurants();
  }
  getRestaurants(){
    this.restaurantService.getResatuarants().subscribe(data =>{
      this.restaurants = data;
      this.collection = data.length;
      console.log(this.collection);
      this.retaurantView = this.restaurants.slice((this.page-1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize );
    })
  }

  deleteRestaurant(id:string){
    this.restaurantService.deleteRestaurant(id).subscribe(()=>{
      console.log("succeffuly deleted")
    });
    this.getRestaurants();
  }
  pageChange(p:number){
    this.page = p;
    this.getRestaurants();
  }
  
}
