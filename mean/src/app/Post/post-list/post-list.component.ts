import { Component, OnDestroy, OnInit } from '@angular/core'
import { Subscription } from 'rxjs'
import {PostService} from '../post.service'
interface postContent{
  title: string,
  content:string
}
@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css'],
})
export class PostListComponent implements OnInit , OnDestroy{
  posts:postContent[]=[]
  private postsSub: any ;
  constructor(public postService: PostService){

  }
  ngOnInit(): void {
    this.postService.getPosts()
    this.postsSub = this.postService.getPostUpdateListener().subscribe((posts:postContent[])=>{
      this.posts = posts
    })
  }

  ngOnDestroy(): void {
    this.postsSub.unsubscribe()
  }
}
