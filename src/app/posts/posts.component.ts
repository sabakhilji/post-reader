import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  
  posts:object[]=[];
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

 

}
