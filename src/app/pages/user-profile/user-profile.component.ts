import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/core/domain/User.interface';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  user:User;

  constructor(public authService:AuthService){

  }
  ngOnInit(): void {
    this.user = this.authService.getUserDetails();
  }

  logout():void{
    this.authService.logout();
  }


}
