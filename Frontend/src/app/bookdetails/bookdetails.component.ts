import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookServiceService } from '../book-service.service';

@Component({
  selector: 'app-bookdetails',
  templateUrl: './bookdetails.component.html',
  styleUrls: ['./bookdetails.component.css']
})
export class BookdetailsComponent implements OnInit {

  
  book={

    title:'',
    author:'',
    genre:'',
    description:'',
    image:''
  }
  constructor(private bookService:BookServiceService,private route:ActivatedRoute) { }

  ngOnInit(): void {

  //this.book =this.route.snapshot.params['book'];
   
  const t=localStorage.getItem("title");
  console.log(t);
  this.bookService.getBookDetails(t).subscribe((data)=>{
    this.book=JSON.parse(JSON.stringify(data));

  });

  //  this.book= JSON.parse(JSON.stringify(b));
  // console.log(this.book.title+"BOOK DETAILS 2");

 

  }

}
