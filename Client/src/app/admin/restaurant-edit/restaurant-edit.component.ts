import { ReviewService } from 'src/app/services/review.service';
import { Restaurant } from 'src/models/restaurants';
import { RestaurantService } from './../../services/restaurant.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-restaurant-edit',
  templateUrl: './restaurant-edit.component.html',
  styleUrls: ['./restaurant-edit.component.css']
})
export class RestaurantEditComponent implements OnInit {
restaurant = new Restaurant();
form:FormGroup;


  constructor(private restaurantService:RestaurantService, private activeRoute: ActivatedRoute, private router:Router, private reviewService:ReviewService) { }

  ngOnInit(): void {
     this.activeRoute.params.subscribe(param=>{
      var id = param.id
      this.restaurantService.getRestaurant(id).subscribe(data =>{ 
        Object.assign(this.restaurant, data);
        console.log(this.restaurant)
        this.form = new FormGroup({
          name: new FormControl(this.restaurant.name, [Validators.required]),
          location : new FormControl(this.restaurant.location, [Validators.required]),
          menu: new FormGroup({
            drinks: new FormControl(this.restaurant.menu.drinks.join() ),
            dishes: new FormControl(this.restaurant.menu.dishes.join())
          }),
        });
        
      })
    })
  }

  get name(){
    return this.form.get('name');
  }
  get location(){
    return this.form.get('location');
  }
  get drinks(){
    return this.form.get('menu.drinks');
  }

  get dishes(){
      return this.form.get('menu.dishes');
    }


    update(form:FormGroup){
      if(form.valid){
        
        var restaurant = new Restaurant();
         restaurant._id= this.restaurant._id;
         restaurant.name = form.value.name; 
         restaurant.location = form.value.location;
         restaurant.menu = {
          drinks : form.value.menu.drinks.split(',').map(drink => drink.trim()),
          dishes : form.value.menu.dishes.split(',').map(dish => dish.trim())
         }
         
         this.restaurantService.updateRestaurant(restaurant).subscribe(data =>{
          console.log(data);
           this.router.navigate(['/admin']);
         })
         
         
      }
    }

    delete(restaurantId:string, reviewId:string){
      this.reviewService.deleteReview(restaurantId,reviewId).subscribe(data =>{
        //window.alert("Are you sure about this action");
        console.log(data);
      })
    }
}
