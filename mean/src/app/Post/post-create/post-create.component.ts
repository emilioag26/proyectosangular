import {Component} from '@angular/core'
import {NgForm} from '@angular/forms'
import { PostService } from '../post.service';
@Component({
    selector: 'app-post-create',
    templateUrl:'./post-create.component.html',
    styleUrls: ['./post.css']
})
export class PostCreateComponent {
    enterContent = '';
    enteredTitle ='';
    constructor(public postService:PostService){

    }
    onAddPost(form:NgForm){
        if(form.invalid){
            alert('Error')
            return
        }
        this.postService.addPost(form.value.title,form.value.content)
    }
}