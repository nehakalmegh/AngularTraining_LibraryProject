import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AddBookComponent } from './add-book/add-book.component';
import { ContactusComponent } from './contactus/contactus.component';
import { DataComponent } from './data/data.component';
import { GetbookComponent } from './getbook/getbook.component';
import { HomeComponent } from './home/home.component';
import { LibrariansearchComponent } from './librariansearch/librariansearch.component';
import { LoginComponent } from './login/login.component';
import { MemberloginComponent } from './memberlogin/memberlogin.component';
import { SearchfilterComponent } from './searchfilter/searchfilter.component';
import { SignupComponent } from './signup/signup.component';
import { UpdateComponent } from './update/update.component';

const routes: Routes = [
                         {​​​​​ path: '', redirectTo: 'home', pathMatch: 'full' }​​​​​,
                         {path:'home',component: HomeComponent},
                         {path:'aboutus',component: AboutusComponent},
                         {path:'contactus',component: ContactusComponent},
                         {path:'login',component: LoginComponent},
                         {path:'signup', component: SignupComponent},
                         {path:'searchfilter',component: SearchfilterComponent},
                         {path:'memberlogin',component: MemberloginComponent},
                         {path:'data' , component:DataComponent},
                         {path:'update/:id',component:UpdateComponent},
                         {path:'add-book',component:AddBookComponent},
                         {path:'getbook/:id',component:GetbookComponent},
                         {path:'librariansearch',component:LibrariansearchComponent}
                        // { path: '', component: HomeComponent, canActivate: [AuthGuard] },
                        // { path: 'login', component: LoginComponent },
                        // { path: 'signup', component: SignupComponent },
                    
                        // // otherwise redirect to home
                        // { path: '**', redirectTo: '' }
                      ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
