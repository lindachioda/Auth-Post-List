import { Component, OnInit, ViewChild } from '@angular/core';
import { LogSignService } from '../../servicies/log-sign-service';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { Registrazione } from '../registrazione';
import { Highlight } from '../../shared/direttive/highlight';

@Component({
  selector: 'app-login',
  imports: [CommonModule, FormsModule, Highlight],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login{

  user!: Registrazione
  message:string = '' //messaggio di login


  constructor(private logSignService:LogSignService){}


  onSubmitLog(form:NgForm){ //accesso 

    let userDati = form.value
    console.log(userDati)

    this.logSignService.logIn().subscribe(users => {
      let user = users.find(user=>
        user.email === userDati.email &&  user.password === userDati.password
      )
   
    if(user){
          console.log("login riuscito!", user)
          this.message = `Ciao ${user.name}!`

          this.logSignService.setLogin(user) //JSON STRINGIFY per inserire local!!!!--> app.ts
        } else {
          console.log("email o password errati")
          this.message = "Email o password errati"
        }
        
      })
      
       
    }

}
