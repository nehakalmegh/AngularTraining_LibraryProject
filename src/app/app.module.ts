import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { SearchfilterPipe } from './searchfilter.pipe';
import { SignupComponent } from './signup/signup.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { SearchfilterComponent } from './searchfilter/searchfilter.component';
import { MemberloginComponent } from './memberlogin/memberlogin.component';
import { HttpModule } from '@angular/http';
import { BookFilterPipe } from './bookfilter.pipe';
import { Books } from './books.component';
import { DataComponent } from './data/data.component';
import { HttpClientModule } from '@angular/common/http';
import { UpdateComponent } from './update/update.component';
import { DataService } from './data.service';
import { AddBookComponent } from './add-book/add-book.component';
import { GetbookComponent } from './getbook/getbook.component';
import { LibrariansearchComponent } from './librariansearch/librariansearch.component';
import { LibrariansearchService } from './librariansearch.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    SearchfilterPipe,
    SignupComponent,
    AboutusComponent,
    ContactusComponent,
    SearchfilterComponent,
    MemberloginComponent,
    BookFilterPipe,
    Books,
    DataComponent,
    UpdateComponent,
    AddBookComponent,
    GetbookComponent,
    LibrariansearchComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpModule,
    HttpClientModule
  ],
  providers: [DataService,LibrariansearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }