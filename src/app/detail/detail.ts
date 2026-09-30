import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostServicies } from '../servicies/post-servicies';
import { Post } from '../post/post';
import { ChangeDetectorRef } from '@angular/core';


@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [],
  templateUrl: './detail.html',
  styleUrl: './detail.scss',
})
export class Detail implements OnInit {

  post?: Post

  constructor(private postServices: PostServicies, 
              private route:ActivatedRoute,
            private cdr:ChangeDetectorRef){
  }

  ngOnInit() {
    let id = Number (this.route.snapshot.paramMap.get(`id`))
      console.log("id:", id)
    //this.post = this.postServices.getPostId(id)
    this.postServices.getPostId(id).subscribe(post=> { console.log("dettaglio:", post); this.post = post})

    this.cdr.detectChanges()
  }
}
