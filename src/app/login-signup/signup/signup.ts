import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { LogSignService } from '../../servicies/log-sign-service';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-signup',
  imports: [CommonModule, FormsModule],
  templateUrl: './signup.html',
  styleUrl: './signup.scss',
})

export class Signup {

  @ViewChild ('formsignup') formsignup! : NgForm

   constructor(private logSignService:LogSignService, private router:Router){}

   onSubmit(form:NgForm){
    this.logSignService.signUp(this.formsignup.value)
    .subscribe(data=> console.log(data)); 
                      this.router.navigate(['/login'])      
    }

}
