import { Injectable } from '@angular/core';
import {Observable, of, throwError} from "rxjs";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private router: Router) {
  }
  setToken(token: string) {
    return localStorage.setItem('token', token)
  }

  getToken() {
    return localStorage.getItem('token')
  }

  isLoggedIn() {
    return this.getToken() !== null
  }

  login(userInfo: {login:string, password: string}): Observable<string | boolean>{
    if(userInfo.password === localStorage.getItem(userInfo.login)){
      this.setToken('auth done')
      return of(true)
    }
    return throwError(()=> new Error('Ошибка авторизации'))
  }
  logOut(){
    localStorage.removeItem('token')
    this.router.navigate([''])
    return true
  }
}
