import { Component, OnInit , Input} from '@angular/core';
import{Post} from '../posts';
@Component({
  selector: 'app-post-item',
  templateUrl: './post-item.component.html',
  styleUrls: ['./post-item.component.css']
})
export class PostItemComponent implements OnInit {
  @Input() post:Post;
  constructor() {
   this.post={
      id:0,
      title:"",
      Votes:1,
   }
   }

  ngOnInit(): void {
  }

}