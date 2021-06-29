import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookServiceService } from '../book-service.service';

@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.css']
})
export class AddbookComponent implements OnInit {

  book={
      title:'',
      author:'',
      genre:'',
      description:'',
      image:''
  }

  constructor(private bookService:BookServiceService,private router:Router) { }

  ngOnInit(): void {
  }
  addBook():void{

   // alert("Added"+this.book.booktitle);
  console.log(this.bookService.addBookToDB(this.book))  ;
     
   // alert("Added Successfully");
     this.router.navigate(['/booklist']);
    
     
     
   }
   
   
}
