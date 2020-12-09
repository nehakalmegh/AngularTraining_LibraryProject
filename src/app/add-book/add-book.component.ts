import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LibrariansearchService } from '../librariansearch.service';
import { UserFetch } from '../user-fetch';
import { Users } from '../users';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.scss']
})
export class AddBookComponent implements OnInit {

  constructor(public route:ActivatedRoute,public router:Router,public rs:LibrariansearchService) { }

  val:any;
  users: Users[]=[];
  user:UserFetch;
  ngOnInit(): void {
    let sub=this.route.params.subscribe(params=>{
      this.val=params['id'];
    });
    console.log("id: "+this.val);
    this.rs.getUpdateUser(this.val).subscribe(data=>{
    this.user=data;
    })
  }

  add(){
    this.rs.createUser(this.user).subscribe(data=>{
    });
    this.getUsers();
    this.router.navigate(['librariansearch']);
  }
  getUsers(){
    this.rs.getUsers().subscribe((response)=>{
      this.users=response;
    });
  }

}
