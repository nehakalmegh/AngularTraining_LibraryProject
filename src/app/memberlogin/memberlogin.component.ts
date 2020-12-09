import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-memberlogin',
  templateUrl: './memberlogin.component.html',
  styleUrls: ['./memberlogin.component.scss']
})
export class MemberloginComponent implements OnInit {

  constructor(private router:Router) { }
  invalidLogin:boolean;
  ngOnInit(): void {
  }

  onSubmit(formValue){
    console.log(formValue);
    console.log("Form Submitted Successfully!!!!!!");
    if(formValue.name=== 'Saavi' && formValue.password==='saavi'){
      window.alert("Logged Successful!");
      this.router.navigateByUrl('/data');
       this.invalidLogin=false
 }
  else{
    window.alert("Invalid Credential");
   }
   // this.router.navigateByUrl('/data');
  }
}
