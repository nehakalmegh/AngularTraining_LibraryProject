import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.scss']
})
export class ContactusComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(form: any) {
    console.log("UserName: " + form.name);
    console.log("LastName: " + form.lastname);
    console.log("Email: " + form.email);
    console.log("DOB: " + form.dob);
    console.log("Form Submitted!!!!");
    alert('SUCCESS!! \n\n');
    //this.router.navigateByUrl("/login-page");
  }
}
