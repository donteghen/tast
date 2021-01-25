import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import {catchError} from 'rxjs/operators/'
import { User } from 'src/models/user';
const port = 3000;
const url : string = "http://localhost:3000/"
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  getUsers():Observable<User[]>{
    return this.http.get<User[]>(url+'users')
     .pipe(catchError((err:Response) => throwError(`network Error : ${err.statusText},   ${err.status}`)));
   }
 
   getUser(id:string):Observable<User>{
     return this.http.get<User>(url+`users/${id}`)
     .pipe(catchError((err:Response) => throwError(`network Error : ${err.statusText},   ${err.status}`)));
   }
 
   saveUser(user:User):Observable<User>{
     return this.http.post<User>(url+'user', user)
     .pipe(catchError((err:Response) => throwError(`network Error : ${err.statusText},   ${err.status}`)))
   }
 
   updateUser(user:User):Observable<User>{
     return this.http.put<User>(url+`users/${user._id}/update`, user)
     .pipe(catchError((err:Response) => throwError(`network Error : ${err.statusText},   ${err.status}`)));
   }
 
   deleteUser(id:string):Observable<User>{
     return this.http.delete<User>(url+`users/${id}`)
     .pipe(catchError((err:Response) => throwError(`network Error : ${err.statusText},   ${err.status}`)));
   }
}
