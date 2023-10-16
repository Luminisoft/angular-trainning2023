import { Component, OnDestroy, OnInit } from '@angular/core';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private authService: AuthService) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.compose([Validators.email, Validators.required])],
      password: ['', Validators.required],
    });
  }

  login() {
    if(!this.loginForm.valid){
      return;
    }
    let email = this.loginForm.get('email').value
    let password = this.loginForm.get('password').value

    this.authService.signIn(email,password);
  }
}
