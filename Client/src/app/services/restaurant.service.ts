import { Restaurant } from './../../models/restaurants';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import {catchError} from 'rxjs/operators/'
const port = 3000;
const url : string = "http://localhost:3000/"
@Injectable({
  providedIn: 'root'
})
export class RestaurantService {
  constructor(private http :  HttpClient) {}

  getResatuarants():Observable<Restaurant[]>{
   return this.http.get<Restaurant[]>(url+'restaurants')
    .pipe(catchError((err:Response) => throwError(`network Error : ${err.statusText},   ${err.status}`)));
  }

  getRestaurant(id:string):Observable<Restaurant>{
    return this.http.get<Restaurant>(url+`restaurants/${id}`)
    .pipe(catchError((err:Response) => throwError(`network Error : ${err.statusText},   ${err.status}`)));
  }

  saveRestaurant(restaurant:Restaurant):Observable<Restaurant>{
    return this.http.post<Restaurant>(url+'restaurant', restaurant)
    .pipe(catchError((err:Response) => throwError(`network Error : ${err.statusText},   ${err.status}`)))
  }

  updateRestaurant(restaurant:Restaurant):Observable<Restaurant>{
    return this.http.put<Restaurant>(url+`restaurants/:${restaurant._id}/update`, restaurant)
    .pipe(catchError((err:Response) => throwError(`network Error : ${err.statusText},   ${err.status}`)));
  }

  deleteRestaurant(id:string):Observable<Restaurant>{
    return this.http.delete<Restaurant>(url+`restaurant:${id}`)
    .pipe(catchError((err:Response) => throwError(`network Error : ${err.statusText},   ${err.status}`)));
  }
}
