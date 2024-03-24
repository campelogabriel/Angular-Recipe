import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  loginUser(user: { name: string; email: string }) {
    return this.http.post(`${environment.urlBackend}login`, user);
  }
  signupUser(login: any) {
    return this.http.post(`${environment.urlBackend}signup`, login);
  }
}
