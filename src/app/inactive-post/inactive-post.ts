import { Component, Input, OnInit, ChangeDetectorRef } from '@angular/core';
import { PostServicies } from '../servicies/post-servicies';
import { Post } from '../post/post';
import { Cards } from '../cards/cards';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-inactive-post',
  imports: [CommonModule, Cards],
  templateUrl: './inactive-post.html',
  styleUrl: './inactive-post.scss',
})

export class InactivePost implements OnInit {

  posts: Post[] = [] 

  constructor(private postServices: PostServicies){}

  ngOnInit(): void{
     //let allPosts = this.postServices.getPosts()
     //this.posts = allPosts.filter(post => !post.active)
     //this.postServices.getPosts().subscribe(post=> this.posts = post)
     this.caricaPosts()
     console.log(this.posts)
  }

  caricaPosts(){ //prendo i post inattivi!!
    this.postServices.getPosts().subscribe (post => {
      this.posts = post.filter(post=> !post.active)
      console.log(this.posts)
    })
  }

  updatePost(id:number){
     this.postServices.updatePosts({active:true},id).subscribe(()=>{
      this.caricaPosts()
      console.log(this.posts)
     })
     //this.posts = this.posts.filter(post => post.active) 

  }

}
