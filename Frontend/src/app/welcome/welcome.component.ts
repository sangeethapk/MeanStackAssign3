import { Component, OnInit } from '@angular/core';
import { NavbarserviceService } from '../navbarservice.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  constructor(public nav:NavbarserviceService) { }

  ngOnInit(): void {
    this.nav.show();
  }

}
