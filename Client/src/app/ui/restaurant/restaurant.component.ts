import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  retaurantPaginating : Restaurant[];
  responsiveOptions;
  filterOn : boolean = false;
  page: number=1;
  // test data
  visibleSidebar1 : boolean = false;
  selectedCities: string[] = [];
  selectedPrices: string[] = [];
  selectedDished: string[] = [];
  selectedCuisine: string[] = [];
  images : string[] = ['https://source.unsplash.com/1600x900/?nature,sky', 'https://source.unsplash.com/1600x900/?nature,tree',
'https://source.unsplash.com/1600x900/?nature,water', 'https://source.unsplash.com/1600x900/?nature,animal',
 'https://source.unsplash.com/daily'];
  constructor(private restaurantService: RestaurantService, private router:Router) { 
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
      this.pageChange(1);
    });
  }

  getRating(res:Restaurant): number{
    if(res.reviews.length == 0){
      return 0
    }
    else{
      var rate = res.reviews.map(r => r.star_rating).reduce((accum=0, curr) => accum + curr);
    return rate;
    }

  }

  routeToDetail(id:string){
    this.router.navigateByUrl(`/restaurants/${id}`);
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
   

    pageChange(p:number){
      this.page = p;
      this.retaurantPaginating = this.restaurants.slice((p-1) * 5, (p- 1) * 5 + 5 );
    }

}
