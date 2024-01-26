import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule, NgIf],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  isLogin: boolean = false;

  loginForm: FormGroup;
  registerForm: FormGroup;

  constructor() {
    this.loginForm = new FormGroup({
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });
    this.registerForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(4)]),
      email: new FormControl('', [Validators.email, Validators.required]),
      password: new FormControl('', Validators.required),
      confirmPassword: new FormControl('', Validators.required),
    });
  }

  onSubmit() {
    if (this.isLogin) {
      console.log(this.loginForm.valid);
    } else {
      console.log(this.registerForm.controls);
    }
  }

  setLogin() {
    this.isLogin = true;
  }
  setSignup() {
    this.isLogin = false;
  }
  get name() {
    return this.registerForm.get('name');
  }
  get email() {
    if (this.isLogin) return this.loginForm.get('email');
    return this.registerForm.get('email');
  }
}
