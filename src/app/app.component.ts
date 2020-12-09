import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
   title = 'LibrarySystem';
  constructor(){}

  onclick(){
    console.log("click on button");
  }

  // currentUser: UserComponent;

  // constructor(
  //     private router: Router,
  //     private authenticationService: AuthService
  // ) {
  //     this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
  // }

  // logout() {
  //     this.authenticationService.logout();
  //     this.router.navigate(['/login']);
  // }
}
