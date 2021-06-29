import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooklistComponent } from './booklist/booklist.component';
import { AuthorlistComponent } from './authorlist/authorlist.component';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { AddbookComponent } from './addbook/addbook.component';
import { AddauthorComponent } from './addauthor/addauthor.component';
import { BookdetailsComponent } from './bookdetails/bookdetails.component';
import { UpdatebookComponent } from './updatebook/updatebook.component';
import { AuthGuard } from './auth.guard';
import { AuthordetailsComponent } from './authordetails/authordetails.component';
import { UpdateauthorComponent } from './updateauthor/updateauthor.component';
import { SignupComponent } from './signup/signup.component';


const routes: Routes = [

  {path:"welcome",component:WelcomeComponent},
  {path:"booklist",component:BooklistComponent},
  {path:"authorlist",component:AuthorlistComponent},
  {path:"",component:LoginComponent},
  {path:"addbook",canActivate:[AuthGuard],component:AddbookComponent} ,
  {path:"addauthor",component:AddauthorComponent} ,
  {path:"bookdetails",component:BookdetailsComponent},
  {path:"updatebook",component:UpdatebookComponent} ,
  {path:"login",component:LoginComponent} ,
  {path:"authordetails",component:AuthordetailsComponent} ,
  {path:"updateauthor",component:UpdateauthorComponent} ,
  {path:"signUp",component:SignupComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
