import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Users } from './users';
import { Observable } from 'rxjs';
import { UserFetch } from './user-fetch';
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class DataService {
  headers= new HttpHeaders().set('Content-Type','application/json')
              .set('Accept','application/json');
  httpOptions={
    headers:this.headers
  }
  user:Users[]=[];
  users:UserFetch;
  constructor(private http:HttpClient) { }
 
  url:string="http://localhost:3000/Users";
 
  getUsers(){
    return this.http.get<Users[]>(this.url);
  }
  
  getUpdateUser(id:number):Observable<Users>{
    return this.http.get<Users>(this.url + '/' + id,this.httpOptions);
  }

  updateUser(user:UserFetch):Observable<Users>{
    //const url='${this.url}/${user.id}';
    return this.http.put<Users>(this.url + '/' + user.id ,user,this.httpOptions).pipe(
      map(() => user)
    );
  }
  getItems() {
    return this.users;
  }
  getUserById(id: string):Observable<Users> {
    return this.http.get<Users>(this.url + '/' + id);
  }

  createUser(user: Users) {
    return this.http.post(this.url, user);
  }

  addToCart(user) {
    this.user.push(user);
  }

  deleteUser(id: number) {
    return this.http.delete(this.url + '/' + id);
  }
  getDetails() {
    return this.http.get<Users[]>(this.url);
 }
 returnupdateUser(user:UserFetch){
  return this.http.put<Users>(this.url + '/' + user.id ,user,this.httpOptions).pipe(
    map(() => user.NumberOfBooks)
  );
}
}
