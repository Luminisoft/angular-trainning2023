import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, Subject, Subscription } from 'rxjs';
import { User } from '../core/domain/User.interface';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements OnInit{
  
  //authToken: string;
  
  //tokenSubscription:Subscription;
  //timeout;

  // fake database storage
  private users:User[] = [
    {
      id:1,
      username:"Jake Sullyvan",
      email:"jake@gmail.com",
      avatar:"https://i.pravatar.cc/300",
      role:"ADMIN"
    },
    {
      id:2,
      username:"Mike Kovasky",
      email:"mike@gmail.com",
      avatar:"https://i.pravatar.cc/300",
      role:"USER"
    },
  ]
  private authListener:Subject<boolean> = new BehaviorSubject<boolean>(this.isLoggedIn());

  constructor(
    private router:Router
  ) { }

  ngOnInit(): void {
    console.log(this.isLoggedIn())
    // this.authListener = new BehaviorSubject<boolean>(this.isLoggedIn());
  }

  getAuthObservable():Observable<boolean>{
    return this.authListener.asObservable();
  }

  signIn(email: any, password: any) {
    const user = this.users.find(user=> user.email==email);
    if(!user){
      console.error(`No such user with mail: ${email}`);
      return;
    }
    this.authListener.next(true);
    this.saveUserIntoLocalStorage(user);
    this.router.navigate(['user-profile'])
  }
  saveUserIntoLocalStorage(user: User) {
    localStorage.setItem("user", JSON.stringify(user));
  }

  isLoggedIn():boolean{
    return localStorage.getItem("user")!=null;
  }

  getUserProfile():User{
    const user = localStorage.getItem("user");
    return JSON.parse(user);
  }
}
