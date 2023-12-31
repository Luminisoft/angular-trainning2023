import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  // Data binding
  // 1. Interpolation

  constructor(private auathService:AuthService){}

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

  isLoggedIn: boolean = true;

  styles={
    // operador ternario
    button: this.isLoggedIn ? "show" : "hidden",
    // input:  this.isActive ? "form-control me-2" : "btn btn-danger",
  }

  isAuthenticated:boolean = true;


  incrementCounter(){
    this.counter += 1;
  }

  ngOnInit(){
    this.auathService.getAuthObservable().subscribe(isAuth=>{
      this.isAuthenticated = isAuth
    })
  }

}
