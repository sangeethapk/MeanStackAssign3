import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthorserviceService } from '../authorservice.service';

@Component({
  selector: 'app-updateauthor',
  templateUrl: './updateauthor.component.html',
  styleUrls: ['./updateauthor.component.css']
})
export class UpdateauthorComponent implements OnInit {
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
     

    const author=localStorage.getItem("updateauthor");
    //this.bookService.updateBook(title);
    this.authorService.getAuthorDetails(author).subscribe((data)=>{
      this.author=JSON.parse(JSON.stringify(data));


  });

}
updateAuthor(){
 this.authorService.updateAuthor(this.author);
  this.router.navigate(['authorlist']) ;

  

}

}
