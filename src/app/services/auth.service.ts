import { Injectable } from '@angular/core';
import { User } from '../core/domain/User.interface';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private authListener:Subject<boolean> = new BehaviorSubject<boolean>(this.isLogged());

  constructor(private router:Router) { }

  // backend emulation
  private users:User[]=[
    {
      name:"Giovani",
      email:"giovani@gmail.com",
      avatar:"https://i.pravatar.cc/300",
      role:"ADMIN"
    },
    {
      name:"Leonardo",
      email:"leonardo@gmail.com",
      avatar:"https://i.pravatar.cc/300",
      role:"USER"
    },
  ]

  signIn(email:string,password:string){
    const user = this.users.find(user=>user.email==email);

    if(!user){
      console.error("User with email does not exist", email)
      return;
    }

    this.saveUserDetails(user);
    this.authListener.next(true)
    this.router.navigate(['/user-profile']);
    
  }

  saveUserDetails(user:User){
    localStorage.setItem('user',JSON.stringify(user));
  }

  getUserDetails(){
    return JSON.parse(localStorage.getItem('user'));
  }

  logout():void{
    localStorage.clear();
    this.authListener.next(false)
    this.router.navigate(['/home']);
  }

  isLogged():boolean{
    return localStorage.getItem('user')!=null ? true : false;
  }

  getAuthObservable():Observable<boolean>{
    return this.authListener.asObservable();
  }

}
