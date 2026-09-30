import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { UserServicies } from '../servicies/user-servicies';
import { User } from '../user/user';
import { RouterLink } from '@angular/router';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { UsersProfilo } from './users-profilo'; 

@Component({
  selector: 'app-users',
  imports: [CommonModule, UsersProfilo],
  templateUrl: './users.html',
  styleUrl: './users.scss',
})
export class Users implements OnInit{

  users: User[] = []
  userSelezionati?: User //variabile che gestisce la lista di utenti e il loro profilo, in child è user?: User

  constructor(private userServicies:UserServicies, private cdr: ChangeDetectorRef){}

  ngOnInit(): void {
    //this.users = this.userServicies.getUsers()
    this.userServicies.getUsers().subscribe((user)=>{
      this.users = user
      console.log(user)
    })
}

  clickUser(user:User){
    this.userSelezionati = user
  }
}
