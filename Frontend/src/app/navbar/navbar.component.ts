import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { NavbarserviceService } from '../navbarservice.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  
  constructor(private router:Router,public _auth:AuthService,public nav:NavbarserviceService) { }

  ngOnInit(): void {
    
  }
  logOut(){

    localStorage.removeItem("token");
    this.router.navigate(["login"]);
  }

}
