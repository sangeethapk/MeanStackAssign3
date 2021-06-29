import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,FormBuilder,Validator, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { NavbarserviceService } from '../navbarservice.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {


  user={
    fname:'',
    email:'',
    username:'',
    password:'',
    repassword:''
  }
  passwordMatch=""
  constructor(private router:Router,private auth:AuthService,public nav:NavbarserviceService) { }
  verify(){

    if(this.user.password!=this.user.repassword){
      this.passwordMatch="Password does not match";
    }
    else{
    alert("Succesful");
    this.auth.addNewMember(this.user).subscribe(res=>{

      this.router.navigate(["/login"]);
    });

  }


  }
 

  ngOnInit(): void {
    this.nav.hide();

  }

}
