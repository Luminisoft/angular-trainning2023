import { Component } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent {

  users:any;

  constructor(private userService:UsersService ){
    this.getUsers();
  }

  getUsers(){
    this.userService.getAllUsers().subscribe((data:any)=>{
      this.users = data;
    })
  }

  addUser(){
    // validacion de formulario
    let user = {
      id:1001,
      name:"Giovani"
    }
    this.userService.addUser(user);
  }

}
