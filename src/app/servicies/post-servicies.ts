import { Injectable } from '@angular/core';
import { Post } from '../post/post';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})

export class PostServicies {

  constructor(private http:HttpClient){}

  posts: Post[] = []

  getPosts() {
    //console.log(this.posts)
    //return this.posts
    return this.http.get<Post[]>(`${environment.apiUrl}/posts`)
  }

  //i button spostano i post active/inactive
  updatePosts(post:Partial<Post>, id:number) {
    //let post = this.posts.find(post=> post.id === id) 
    // if(post){
    //  post.active =!post.active 
    console.log(id)
    return this.http.patch<Post>(`${environment.apiUrl}/posts/${id}`, post)
  }

  getPostId(id:number) {
    return this.http.get<Post>(`${environment.apiUrl}/posts/${id}`)
    //return this.posts.find(post=> post.id === id)
  }
}
