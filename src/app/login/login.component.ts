import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  ngOnInit(){

  }
  constructor(private router:Router){}
  invalidLogin:boolean;
  onSubmit(formvalue){
    console.log(formvalue);
    if(formvalue.name=== 'Neha' && formvalue.password==='nk0211'){
      window.alert("Logged Successful!");
          this.router.navigateByUrl('/librariansearch');
           this.invalidLogin=false
     }
      else{
        window.alert("Invalid Credential");
       }
      //   }
  //  this.router.navigateByUrl('/librariansearch');
  }
  // loginForm: FormGroup;
  // loading = false;
  // submitted = false;
  // returnUrl: string;

  // constructor(
  //     private formBuilder: FormBuilder,
  //     private route: ActivatedRoute,
  //     private router: Router,
  //     private authenticationService: AuthService,
  //     private alertService: AlertService
  // ) {
  //     // redirect to home if already logged in
  //     if (this.authenticationService.currentUserValue) { 
  //         this.router.navigate(['/']);
  //     }
  // }

  // ngOnInit() {
  //     this.loginForm = this.formBuilder.group({
  //         username: ['', Validators.required],
  //         password: ['', Validators.required]
  //     });

  //     // get return url from route parameters or default to '/'
  //     this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  // }

  // // convenience getter for easy access to form fields
  // get f() { return this.loginForm.controls; }

  // onSubmit() {
  //     this.submitted = true;

  //     // stop here if form is invalid
  //     if (this.loginForm.invalid) {
  //         return;
  //     }

  //     this.loading = true;
  //     this.authenticationService.login(this.f.username.value, this.f.password.value)
  //         .pipe(first())
  //         .subscribe(
  //             data => {
  //                 this.router.navigate([this.returnUrl]);
  //             },
  //             error => {
  //                 this.alertService.error(error);
  //                 this.loading = false;
  //             });
  // }
}
