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
restaurant = new Restaurant()
form:FormGroup
isSubmitted:boolean;
  constructor(private restaurantService:RestaurantService, private activeRoute: ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
     this.activeRoute.params.subscribe(param=>{
      var id = param.id
      this.restaurantService.getRestaurant(id).subscribe(data =>{ 
        Object.assign(this.restaurant, data);
        this.form = new FormGroup({
          name: new FormControl(this.restaurant.name, [Validators.required]),
          location : new FormControl(this.restaurant.location, [Validators.required]),
          menu: new FormGroup({
            drinks: new FormControl(this.restaurant.menu.drinks.join() ),
            dishes: new FormControl(this.restaurant.menu.dishes.join())
          }),
          review: new FormControl(this.restaurant.reviews)
        });
        this.isSubmitted = false;
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

}
