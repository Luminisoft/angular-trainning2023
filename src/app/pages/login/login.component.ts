import { Component, OnDestroy, OnInit } from '@angular/core';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.compose([Validators.email, Validators.required])],
      password: ['', Validators.required],
    });
  }

  login() {
    // if(!this.loginForm.valid){
    //   return;
    // }
    console.log(this.loginForm.get('email'))
    let email = this.loginForm.get('email').value
    let password = this.loginForm.get('password').value
    
  }

  get email(){
    return this.loginForm.get('email')
  }
}