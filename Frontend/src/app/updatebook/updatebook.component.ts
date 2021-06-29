import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookServiceService } from '../book-service.service';
import { BooklistComponent } from '../booklist/booklist.component';

@Component({
  selector: 'app-updatebook',
  templateUrl: './updatebook.component.html',
  styleUrls: ['./updatebook.component.css']
})
export class UpdatebookComponent implements OnInit {

  book={
    title:'',
    author:'',
    genre:'',
    description:'',
    image:''
}

  constructor(private bookService:BookServiceService,private router:Router) { }

  ngOnInit(): void {
     

    const title=localStorage.getItem("updatetitle");
    //this.bookService.updateBook(title);
    this.bookService.getBookDetails(title).subscribe((data)=>{
      this.book=JSON.parse(JSON.stringify(data));


  });

}
updateBook(){
 this.bookService.updateBook(this.book);
  this.router.navigate(['booklist']) ;

  

}

}
