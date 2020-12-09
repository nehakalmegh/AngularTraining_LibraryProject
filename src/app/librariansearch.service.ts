import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { UserFetch } from './user-fetch';
import { Users } from './users';

@Injectable({
  providedIn: 'root'
})
export class LibrariansearchService {

  headers= new HttpHeaders().set('Content-Type','application/json')
              .set('Accept','application/json');
  httpOptions={
    headers:this.headers
  }
  constructor(private http:HttpClient) { }
 
  url:string="http://localhost:3000/Users";
 
  getUsers(){
    return this.http.get<Users[]>(this.url);
  }

  getUpdateUser(id:number):Observable<Users>{
   // const url='${this.url}/${id}';
    return this.http.get<Users>(this.url + '/' + id,this.httpOptions);
  }
  updateUser(user:UserFetch):Observable<Users>{
    //const url='${this.url}/${user.id}';
    return this.http.put<Users>(this.url + '/' + user.id ,user,this.httpOptions).pipe(
      map(() => user)
    );
  }

  getUserById(id: number) {
    return this.http.get<Users>(this.url + '/' + id);
  }

  createUser(user: Users) {
    return this.http.post(this.url, user);
  }

  deleteUser(id: number) {
    return this.http.delete(this.url + '/' + id);
  }
}
