import { Injectable } from "@angular/core";
import { postContent } from "./post.model";
import { Subject } from "rxjs";
import {HttpClient} from '@angular/common/http'
@Injectable({providedIn:'root'})
export class PostService{
    private posts:postContent[] = [];
    private postUpdated = new Subject<postContent[]>()

    constructor(private http:HttpClient){

    }
    getPosts(){
        this.http.get<{message:string, posts:postContent[]}>('http://localhost:3000/api/posts').subscribe((postData)=>{
            this.posts = postData.posts
            this.postUpdated.next([...this.posts])
        })  
    }
    getPostUpdateListener(){
        return this.postUpdated.asObservable();
    }
    addPost(title:string, content:string){
        const post:postContent = {
            title: title,
            content:content
        }
        this.posts.push(post)
        this.postUpdated.next([...this.posts])
    }
}