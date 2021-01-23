import { RestaurantService } from 'src/app/services/restaurant.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Restaurant } from 'src/models/restaurants';

@Component({
  selector: 'app-restaurant-create',
  templateUrl: './restaurant-create.component.html',
  styleUrls: ['./restaurant-create.component.css']
})
export class RestaurantCreateComponent implements OnInit {
 form : FormGroup;
 isSubmitted:boolean;
  constructor(private restaurantService: RestaurantService) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl('', [Validators.required]),
      location : new FormControl('', [Validators.required]),
      menu: new FormGroup({
        drinks: new FormControl('', [Validators.required]),
        dishes: new FormControl('', [Validators.required])
      })
    });
    this.isSubmitted = false;
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

    create(form:FormGroup){
      if(form.valid){
        
        var restaurant = new Restaurant();
         restaurant._id= null;
         restaurant.name = form.value.name; 
         restaurant.location = form.value.location;
         restaurant.menu = {
          drinks : form.value.menu.drinks.split(',').map(drink => drink.trim()),
          dishes : form.value.menu.dishes.split(',').map(dish => dish.trim())
         }
         restaurant.reviews =  [];
         console.log(restaurant);
         this.restaurantService.saveRestaurant(restaurant).subscribe(data =>{
          console.log(data);
           console.log("successfully created restaurant");
           this.isSubmitted=true;
         })
         
         
      }
    }

}
