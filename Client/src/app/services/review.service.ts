import { Review } from './../../models/reviews';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import {catchError} from 'rxjs/operators/'
const url : string = "http://localhost:3000/"

@Injectable({
  providedIn: 'root'
})
export class ReviewService {

  constructor(private http:HttpClient) { }

  getReviews():Observable<Review[]>{
    return this.http.get<Review[]>(url+'reviews')
    .pipe(catchError((error:Response) => throwError(`Network Error: ${error.status},  ${error.statusText}`)));
  } 

  CreateReview(review:Review, restaurntId: string):Observable<Review>{
    return this.http.post<Review>(url + `restaurants/${restaurntId}/review`, review)
    .pipe(catchError((error:Response) => throwError(`Network Error: ${error.status},  ${error.statusText}`))); 
  }

  deleteReview(restaurantId:string, reviewId:string):Observable<Review>{
    return this.http.delete<Review>(url + `restaurants/${restaurantId}/reviews/${reviewId}`)
    .pipe(catchError((error:Response) => throwError(`Network Error: ${error.status},  ${error.statusText}`))); 
  }

  
}
