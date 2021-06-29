import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthorserviceService } from '../authorservice.service';

@Component({
  selector: 'app-addauthor',
  templateUrl: './addauthor.component.html',
  styleUrls: ['./addauthor.component.css']
})
export class AddauthorComponent implements OnInit {
  author={
  
    author:'',
    country:'',
    famousbooks:'',
    genre:'',
    description:'',
    image:''
  };

  constructor(private authorService:AuthorserviceService,private router:Router) { }

  ngOnInit(): void {
  }

  addAuthor():void{

    // alert("Added"+this.book.booktitle);
    this.authorService.addAuthorToDB(this.author);
      
      alert("Added Successfully");
      this.router.navigate(['/authorlist']);
     
   }

}
