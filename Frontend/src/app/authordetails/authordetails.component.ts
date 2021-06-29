import { Component, OnInit } from '@angular/core';
import { AuthorserviceService } from '../authorservice.service';

@Component({
  selector: 'app-authordetails',
  templateUrl: './authordetails.component.html',
  styleUrls: ['./authordetails.component.css']
})
export class AuthordetailsComponent implements OnInit {
  author={
  
    author:'',
    country:'',
    famousbooks:'',
    genre:'',
    description:'',
    image:''
  };

  constructor(private authorService:AuthorserviceService) { }

  ngOnInit(): void {

console.log("inside authorDetails init");

    const t=localStorage.getItem("author");
  console.log(t);
  this.authorService.getAuthorDetails(t).subscribe((data)=>{
    this.author=JSON.parse(JSON.stringify(data));
  });
}

}
