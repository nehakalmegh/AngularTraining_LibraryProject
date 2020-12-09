import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';
import { UserFetch } from '../user-fetch';
import { Users } from '../users';

@Component({
  selector: 'app-getbook',
  templateUrl: './getbook.component.html',
  styleUrls: ['./getbook.component.scss']
})
export class GetbookComponent implements OnInit {
  Book_title:any;
  Book_auther:any;
  NumberOfBooks:any;
  constructor(public rs: DataService,private router:Router,public route:ActivatedRoute) { }
  users:Users[]=[];
  user:UserFetch;
  //id:number;
  val:any;
  ngOnInit(): void {
     this.rs.getUserById(this.user.id).subscribe(data=>{
      this.user=data;
     });
    this.user= this.rs.getItems();
    this.rs.getDetails().subscribe(data => {
      console.log(data);
      this.users=data;
     })
  }
  getUsers(){
    this.rs.getUsers().subscribe((response)=>{
      this.users=response;
    });
  }
  getData(user):void{
    this.Book_title = user.Book_title;
    this.Book_auther = user.Book_auther;
    this.NumberOfBooks = user.NumberOfBooks;
   // this. = user.pageCount;
   
    }
}
