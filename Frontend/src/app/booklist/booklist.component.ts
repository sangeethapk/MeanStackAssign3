import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { BookServiceService } from '../book-service.service';

@Component({
  selector: 'app-booklist',
  templateUrl: './booklist.component.html',
  styleUrls: ['./booklist.component.css']
})
export class BooklistComponent implements OnInit {
 books=[{
    title:'',
    author:'',
    genre:'',
    description:'',
    image:''
 }];
  constructor(private bookService:BookServiceService,private router:Router,public _auth:AuthService) { }

  ngOnInit(): void {
   
   // console.log(this.bookService.getBooks());

   this.bookService.getBooks().subscribe((data)=>{
    this.books=JSON.parse(JSON.stringify(data));

  });

  }
  deleteBook(book:any){
      
    this.bookService.deleteBook(book.title)
      .subscribe((data) => {
        this.books = this.books.filter(b => b !== book);
        //this.books = JSON.parse(JSON.stringify(data));
      });

  }

  getDetails(title:string){
     console.log("inside booklist:"+title);
   // this.bookService.getBookDetails(book);
   localStorage.setItem("title",title);
   this.router.navigate(['bookdetails']);
    
  }

   updateBook(book:any){
       
    localStorage.setItem("updatetitle",book.title);
    this.router.navigate(['updatebook']);
   }
}
