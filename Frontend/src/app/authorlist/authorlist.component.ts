import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { AuthorserviceService } from '../authorservice.service';

@Component({
  selector: 'app-authorlist',
  templateUrl: './authorlist.component.html',
  styleUrls: ['./authorlist.component.css']
})

export class AuthorlistComponent implements OnInit {


  authors=[{
  
    author:'',
    country:'',
    famousbooks:'',
    genre:'',
    description:'',
    image:''
  }];

  constructor(private authorService:AuthorserviceService,private router:Router,public _auth:AuthService) { }

  ngOnInit(): void {

    this.authorService.getAuthors().subscribe((data)=>{
      this.authors=JSON.parse(JSON.stringify(data));
  
    });
}

deleteAuthor(author:any){
      
  this.authorService.deleteAuthor(author.author)
    .subscribe((data) => {
      this.authors = this.authors.filter(b => b !== author);
      //this.books = JSON.parse(JSON.stringify(data));
    });

}

getDetails(author:string){
   console.log("inside authorlist:"+author);
 //alert("hello");
 localStorage.setItem("author",author);
 this.router.navigate(['authordetails']);
  
}

 updateAuthor(author:any){
     
  localStorage.setItem("updateauthor",author.author);
  this.router.navigate(['updateauthor']);
 }



}
