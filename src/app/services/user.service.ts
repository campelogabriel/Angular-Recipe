import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { Router } from '@angular/router';
import { tap } from 'rxjs';
import { IUser } from '../interfaces/user';
import { ILoginUser } from '../interfaces/login-user';
import { ISignupUser } from '../interfaces/signup-user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient, private router: Router) {}

  loginUser(user: ILoginUser) {
    this.router.navigate(['']);
    return this.http.post<IUser>(`${environment.urlBackend}login`, user).pipe(
      tap((res: IUser) => {
        if (res.status !== 'success') return;
        localStorage.setItem('token', JSON.stringify(res.token));
        localStorage.setItem('user', JSON.stringify(res.user));
      })
    );
  }
  signupUser(login: ISignupUser) {
    this.router.navigate(['']);
    return this.http.post<IUser>(`${environment.urlBackend}signup`, login).pipe(
      tap((res: IUser) => {
        if (res.status !== 'success') return;
        localStorage.setItem('token', JSON.stringify(res.token));
        localStorage.setItem('user', JSON.stringify(res.user));
      })
    );
  }

  setFavoriteRecipe(id: string, isRemove: boolean) {
    if (isRemove) {
      return this.http.post<IUser>(
        `${environment.urlBackend}recipeFavorite/${id}`,
        {}
      );
    } else {
      return this.http.delete<IUser>(
        `${environment.urlBackend}recipeFavorite/${id}`,
        {}
      );
    }
  }
}
