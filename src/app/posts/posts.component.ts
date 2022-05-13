import { Component, OnInit } from '@angular/core';
import{Post} from '../posts';
import { PostService } from '../services/post.service';
@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  
  posts:Post[]=[];
  constructor(private postservice:PostService) { }
  ngOnInit():void{
   this.postservice.getPosts().subscribe(res=>{ 
     for(let index=0;index<res.length;index++)
     {
       const post=res[index]
       post["Votes"]=1
     }
     this.posts=res})      
  }
hidepost(post:Post):void{
  this.posts=this.posts.filter(p=> p.id!==post.id);
}
 
addPost(post:Post):void{
  this.posts.unshift(post);
  alert("Post added!");
}

}
