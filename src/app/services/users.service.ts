import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from '../core/domain/Product.interface';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http:HttpClient) { }

  getAllUsers():Observable<Product[]>{
    // return of(this.users);
    const url:string= "https://fakestoreapi.com/products"
    return this.http.get<Product[]>(url);
  }

  addUser(user:any){
    // [1,2,3,4,5,6] length = 5
    // users.length + 1 
    // user.id = 6


    // user = {name,email}
   // user.id = this.users.length + 1
    // user = {id,name,email}
    //this.users.push(user);
  }

  deleteUser(id:number):void{
    // find the item index
    //console.log("User id", id)
    //let index = this.users.findIndex((user:any)=>{
    //return user.id==id;
   // }); 

    //console.log("index in array:", index);

    // remove user from list
    //this.users.splice(index,1);
  }

}
