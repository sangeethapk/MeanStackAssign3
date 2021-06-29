import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { BooklistComponent } from './booklist/booklist.component';
import { AuthorlistComponent } from './authorlist/authorlist.component';
import { AddbookComponent } from './addbook/addbook.component';
import { AddauthorComponent } from './addauthor/addauthor.component';
import { BookdetailsComponent } from './bookdetails/bookdetails.component';
import { AuthordetailsComponent } from './authordetails/authordetails.component';
import { NavbarComponent } from './navbar/navbar.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule,HTTP_INTERCEPTORS} from '@angular/common/http';
import { UpdatebookComponent } from './updatebook/updatebook.component';
import { FooterComponent } from './footer/footer.component';
import { BookServiceService } from './book-service.service';
import { AuthService } from './auth.service';
import { NavbarserviceService } from './navbarservice.service';
import { TokenInterceptorService } from './token-interceptor.service';
import { UpdateauthorComponent } from './updateauthor/updateauthor.component';
import { AuthorserviceService } from './authorservice.service';
import { SignupComponent } from './signup/signup.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    BooklistComponent,
    AuthorlistComponent,
    AddbookComponent,
    AddauthorComponent,
    BookdetailsComponent,
    AuthordetailsComponent,
    NavbarComponent,
    WelcomeComponent,
    UpdatebookComponent,
    FooterComponent,
    UpdateauthorComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [BookServiceService,AuthService ,AuthorserviceService,NavbarserviceService,{
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
