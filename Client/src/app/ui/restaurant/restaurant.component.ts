import { Component, OnInit } from '@angular/core';
import { RestaurantService } from 'src/app/services/restaurant.service';
import { Restaurant } from 'src/models/restaurants';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css']
})
export class RestaurantComponent implements OnInit {
  restaurants : Restaurant[];
  restaurantData : Restaurant[];
  responsiveOptions;
  filterOn : boolean = false;
  // test data
  visibleSidebar1 : boolean = false;
  selectedCities: string[] = [];
  selectedPrices: string[] = [];
  selectedDished: string[] = [];
  selectedCuisine: string[] = [];
  constructor(private restaurantService: RestaurantService) { 
    this.responsiveOptions = [
      {
          breakpoint: '1024px',
          numVisible: 5,
          numScroll: 5
      },
      {
          breakpoint: '768px',
          numVisible: 3,
          numScroll: 3
      },
      {
          breakpoint: '560px',
          numVisible: 1,
          numScroll: 1
      }
  ];
  }

  ngOnInit(): void {
    this.getFreshList();
  }
  getFreshList(){
    this.restaurantService.getResatuarants()
    .subscribe(data =>{
      this.restaurantData = data;
      this.restaurants = this.restaurantData;
    });
  }

   // filters
   // turkish cuisine
   cuisineApply(){
    this.filterOn =true;
    console.log(this.selectedCuisine);
   }

   // Price level 
   priceApply(){
    this.filterOn = true;
    console.log(this.selectedPrices);
   }

   //Dished 
   dishApply(){
    this.filterOn = true;
    console.log(this.selectedDished);
   }

   //cities
   citiesApply(){
    this.filterOn = true;
    console.log(this.selectedCities);

   }

   removeFilter(){
    this.filterOn = false;
    this.selectedCities= [];
    this.selectedCuisine = [];
    this.selectedPrices = [];
    this.selectedDished = [];
    this.getFreshList();
   }

}
