import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css'],
})
export class UsersListComponent {
  users: any;

  createUserForm = this.formBuilder.group({
    name:['',Validators.required],
    email:['',Validators.email],
  })

  constructor(
    private userService: UsersService,
    private formBuilder: FormBuilder
  ) {
    this.getUsers();
  }

  getUsers() {
    this.userService.getAllUsers().subscribe((data: any) => {
      this.users = data;
    });
  }

  addUser() {
    // validacion de formulario
    if(this.createUserForm.invalid) return;

    let user = this.createUserForm.value;

    let userWithId = user;

    // this.userService.addUser(user);
  }

  removeUser(id: number) {
    // validacion
    this.userService.deleteUser(id);
  }
}
