import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthorserviceService {

 
  authors=[{
    author:'',
    country:'',
    famousbooks:'',
    genre:'',
    description:'',
    image:''

  },
  
]
  constructor(private http:HttpClient,private router:Router) { }

  addAuthorToDB(author:any){

    
      return this.http.post("http://localhost:3000/author/insert",{"author":author})
      .subscribe(data =>{console.log(data)})
    

    
  }

  getAuthors(){
console.log("inside service author get");

   
      return this.http.get("http://localhost:3000/author/authorlist");
    
  
  }
  getAuthorDetails(author:any){

      console.log(author);
      return this.http.get("http://localhost:3000/author/authordetails/"+author);


  }

  deleteAuthor(author:any){
    return this.http.delete("http://localhost:3000/author/remove/"+author);

  }
  updateAuthor(author:any){
    console.log("inside update service"+author);
    const oldauthor=localStorage.getItem("updateauthor");
    return this.http.put("http://localhost:3000/author/update/"+oldauthor,author)
   .subscribe(data =>{console.log(data)})

    

  }


}
