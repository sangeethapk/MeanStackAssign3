import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  server_address:string="/api";
 // server_address:string="http://localhost:3000/login";

  constructor(private http:HttpClient) { }


  authenticateLogin(user:any){

    return this.http.post<any>(this.server_address+"/login",user);//we are not handling result from here

  }
  loggedIn(){

    return !!localStorage.getItem("token");

    
  }
  getToken(){

    return localStorage.getItem("token");
  }

  addNewMember(member:any){
    return this.http.post<any>(this.server_address+"/signup",member);
  }
}
