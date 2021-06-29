import { Injectable } from '@angular/core';
import {HttpClient ,HttpResponse} from '@angular/common/http'
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class BookServiceService {


  books=[{
    title:'',
    author:'',
    genre:'',
    description:'',
    image:''

  },
  
]
  constructor(private http:HttpClient,private router:Router) { }

  addBookToDB(book:any){

    return this.http.post("http://localhost:3000/insert",{"book":book})
    .subscribe(data =>{
      console.log(data+"add service")
    })
    
     
    

    
  }

  getBooks(){

   
      return this.http.get("http://localhost:3000/booklist");
    
  
  }
  getBookDetails(title:any){

      console.log(title);
      return this.http.get("http://localhost:3000/bookdetails/"+title);


  }

  deleteBook(title:any){
    return this.http.delete("http://localhost:3000/remove/"+title);

  }
  updateBook(book:any){
    console.log("inside update service"+book);
    const oldtitle=localStorage.getItem("updatetitle");
    return this.http.put("http://localhost:3000/update/"+oldtitle,book)
   .subscribe(data =>{console.log(data)})

    

  }
  
}
