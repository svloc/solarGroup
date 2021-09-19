import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class userService {

url2:string= "https://gorest.co.in/public/v1/posts";
constructor(private http:HttpClient ) { }

    getData()
    {
      let header = new HttpHeaders({ 'Content-Type': 'application/json' }) 
      return this.http.get(this.url2, {headers : header });
    }
}