import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { NavbarserviceService } from '../navbarservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService:AuthService,private router:Router,public nav:NavbarserviceService) { }
  user={
    username:'',
    password:''
  }
  error=""
  passwordError=""

  ngOnInit(): void {
    this.nav.hide();
  }

  clearText(){
    this.error='';
    
  }
  loginUser(){
    this.error="";
    console.log("Login Component method");
    this.authService.authenticateLogin(this.user)
    .subscribe(res=>{
     
      console.log("Status from server");
      if(this.user.username=="admin"&&this.user.password=="Admin123")
      {
          localStorage.setItem("token",res.token);
      }
     
      this.router.navigate(["/welcome"]);
    
    },
        (error) => {                              //Error callback
          console.error('error caught in component')
          const errorMessage = error;
         const  loading = false;
         if(error.status==403)
         this.error="User does not exist";
         else if(error.status==401)
         this.passwordError="Invalid Password";
         else 
           this.error=error;

         console.log(errorMessage);
         //this.router.navigate(["/welcome"]);
    
          //throw error;   //You can also throw the error to a global error handler
        });

  }

}
