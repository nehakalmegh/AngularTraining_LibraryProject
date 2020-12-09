import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { UserFetch } from '../user-fetch';
import { Users } from '../users';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.scss']
})
export class DataComponent implements OnInit {

  // constructor() { }

  // ngOnInit(): void {
  // }
id:any;
Book_title:any;
Book_auther:any;
NumberOfBooks:any;
 // NumberOfBooks:any;
 user:UserFetch;
  users:Users[]=[];
  constructor(public rs: DataService,private router:Router) { 
   // this.return(this.NumberOfBooks);
  }
  
  ngOnInit(): void {
    this.rs.getUsers().subscribe((response)=>{
      this.users=response;
    });
    this.rs.getDetails().subscribe(data => {
      console.log(data);
      this.users=data;
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
  // key= 'Book_id';
  // reverse:boolean=false;
  // sort(key){
  //   this.key= key;
  //   this.reverse=!this.reverse;
  // }
  // deleteRow(val){
  //   if(confirm("Are you sure to return?")){
  //   this.rs.deleteUser(val).subscribe(data =>{
  //   });
  //   this.rs.getUsers().subscribe((response) => {
  //     this.users = response;
  //   })}
  // }
  
return(user){  
  this.NumberOfBooks=user.NumberOfBooks+1;
  window.alert('Book is return');
     // this.router.navigate(['data']);
}  
getUsers(NumberOfBooks){
  this.rs.getUsers().subscribe((response)=>{
    NumberOfBooks =response;
  });
}
  update(id){
    this.router.navigate(['/update',id]);
  }
  add(users){
  //  addToCart(product) {
      this.rs.addToCart(users);
      window.alert('Your book has been added to the reading content!');
  }
  get(){
     // window.alert('Your book has been added to the cart!');
    this.router.navigate(['/getbook']);
    // this.rs.getUsers().subscribe((response) => {
    // this.users = response;
  //});
}
logout(){
  if(window.confirm('Are you sure you want to logout?')){
  this.router.navigate(['/home']);}
}
getData(user):void{
  this.Book_title = user.Book_title;
  this.Book_auther = user.Book_auther;
  this.NumberOfBooks = user.NumberOfBooks;
  this.id = user.id;
 
  }
}
