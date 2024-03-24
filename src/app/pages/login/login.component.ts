import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { RouterLink } from '@angular/router';
import { UserService } from '../../services/user.service';

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

  constructor(private userService: UserService) {
    this.loginForm = new FormGroup({
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });
    this.registerForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(4)]),
      email: new FormControl('', [Validators.email, Validators.required]),
      password: new FormControl('', Validators.required),
      confirmPassword: new FormControl('', [Validators.required]),
    });
  }

  onSubmit() {
    if (this.isLogin) {
      this.userService
        .loginUser(this.loginForm.value)
        .subscribe((a) => console.log(a));
    } else {
      this.userService
        .signupUser(this.registerForm.value)
        .subscribe((a) => console.log(a));
    }
  }

  setLogin() {
    this.isLogin = true;
  }
  setSignup() {
    this.isLogin = false;
  }
}
