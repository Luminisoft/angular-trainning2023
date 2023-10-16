import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{

  constructor(private authService:AuthService){
    
  }
  
  // Data binding
  // 1. Interpolation

  title:string = "Esta es otra aplicacion";

  // 2. Propery Binding
  isHidden:boolean = false;

  // 3. Event binding

  counter:number = 0;


  // 5. For
  names:string[] = [
    "Giovani",
    "Gustavo",
    "Daniel",
    "Alex"
  ]

  incrementCounter(){
    this.counter += 1;
  }

  isAuthenticated = false;

  ngOnInit(): void {
    this.authService.getAuthObservable().subscribe(isAuthenticated=>{
      this.isAuthenticated = isAuthenticated;
    })
  }

}
