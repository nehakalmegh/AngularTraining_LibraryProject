import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  onSubmit(form: any) {
    console.log("UserName: " + form.name);
    console.log("LastName: " + form.lastname);
    console.log("Email: " + form.email);
    console.log("DOB: " + form.dob);
    console.log("Form Submitted!!!!");
    alert('SUCCESS!! \n\n');
    this.router.navigateByUrl("/login");
  }

  // registerForm: FormGroup;
  // loading = false;
  // submitted = false;

  // constructor(
  //     private formBuilder: FormBuilder,
  //     private router: Router,
  //     private authenticationService: AuthService,
  //     private userService: UserService,
  //     private alertService: AlertService
  // ) { 
  //     // redirect to home if already logged in
  //     if (this.authenticationService.currentUserValue) { 
  //         this.router.navigate(['/']);
  //     }
  // }

  // ngOnInit() {
  //     this.registerForm = this.formBuilder.group({
  //         firstName: ['', Validators.required],
  //         lastName: ['', Validators.required],
  //         username: ['', Validators.required],
  //         password: ['', [Validators.required, Validators.minLength(6)]]
  //     });
  // }

  // // convenience getter for easy access to form fields
  // get f() { return this.registerForm.controls; }

  // onSubmit() {
  //     this.submitted = true;

  //     // stop here if form is invalid
  //     if (this.registerForm.invalid) {
  //         return;
  //     }

  //     this.loading = true;
  //     this.userService.register(this.registerForm.value)
  //         .pipe(first())
  //         .subscribe(
  //             data => {
  //                 this.alertService.success('Registration successful', true);
  //                 this.router.navigate(['/login']);
  //             },
  //             error => {
  //                 this.alertService.error(error);
  //                 this.loading = false;
  //             });
  // }
}
