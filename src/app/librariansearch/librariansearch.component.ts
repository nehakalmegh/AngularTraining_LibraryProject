import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { LibrariansearchService } from '../librariansearch.service';
import { UserFetch } from '../user-fetch';
import { Users } from '../users';

@Component({
  selector: 'app-librariansearch',
  templateUrl: './librariansearch.component.html',
  styleUrls: ['./librariansearch.component.scss']
})
export class LibrariansearchComponent implements OnInit {
user:UserFetch;
  //constructor() { }
  Book_title:any;
  users:Users[]=[];
  constructor(public rs: LibrariansearchService,private router:Router) { }
  
  ngOnInit(): void {
    this.rs.getUsers().subscribe((response)=>{
      this.users=response;
    })
  }
  Search(){
    if(this.Book_title==""){
      this.ngOnInit();
    }else{
      this.users= this.users.filter(res=>{
        return res.Book_title.toLocaleLowerCase().match(this.Book_title.toLocaleLowerCase());
      })
    }
  }
  deleteRow(val){
    if(confirm("Are you sure you want to delete?")){
    this.rs.deleteUser(val).subscribe(data =>{
    });
    this.rs.getUsers().subscribe((response) => {
      this.users = response;
    })}
  }

  update(id){
    this.router.navigate(['/update',id]);
  }
  add(user){
    this.router.navigate(['/add-book',user]);
  }
  get(id){
    this.router.navigate(['/getbook',id]);
    // this.rs.getUsers().subscribe((response) => {
    // this.users = response;
  //});
}

logout(){
  if(window.confirm('Are you sure you want to logout?')){
  this.router.navigate(['/home']);
  }
}
}
