import { Component, signal, OnInit } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { PostServicies } from './servicies/post-servicies';
import { Post } from '../app/post/post';
import { ActivePost } from "./active-post/active-post";
import { Registrazione } from './login-signup/registrazione';
import { CommonModule } from '@angular/common';
import { LogSignService } from './servicies/log-sign-service';



@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit{
  protected readonly title = signal('myapp-two');

   user?: Registrazione

      constructor(private logSignService:LogSignService){}

   ngOnInit(): void { //LOGIN local storage--> login.ts

    this.logSignService.restore()//per il restore in logSignService

     let userSalvato = localStorage.getItem("user")

     if(userSalvato){
      this.user = JSON.parse(userSalvato)
     } else{
      console.log("email o password errati")
     }

     localStorage.removeItem('user')//AL REFRESH SI SLOGGA perchè json server non genera token
   }
  

}
