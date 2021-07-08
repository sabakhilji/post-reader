import { Component, OnInit } from '@angular/core';
import{Post} from '../posts';
@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  
  posts:Post[]=[];
  constructor() { }
  ngOnInit():void{
    this.posts=[
      { id:1,
        title:"first post",
        Votes:1

      },
      {id:2,
        title:"second post",
        Votes:2
      }
    ]
   
  }
hidepost(post:Post):void{
  this.posts=this.posts.filter(p=> p.id!==post.id);
}
 

}
