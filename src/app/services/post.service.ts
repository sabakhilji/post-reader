import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from '../posts';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http:HttpClient) { }

getPosts():(Observable<Post[]>){
 return this.http.get<Post[]>("https://jsonplaceholder.typicode.com/posts?_limit=8") ;
    

 }
}