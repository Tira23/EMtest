import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {AuthService} from "../components/auth/auth.service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard  {
  constructor(private authService: AuthService, private router: Router) {

  }
  canActivate()  {
    if (!this.authService.isLoggedIn()){
      this.router.navigate(['']).then()
      return false
    }
    return true
  }

}
