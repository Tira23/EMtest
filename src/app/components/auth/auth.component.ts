import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

import {Router} from "@angular/router";
import {AuthService} from "./auth.service";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  constructor(
    private formGroup: FormBuilder,
    private AuthService: AuthService,
    private router: Router,
    private authService: AuthService
  ) {
  }

  auth!: FormGroup

  ngOnInit() {
    this.auth = new FormGroup({
      login: new FormControl('', [
        Validators.required,
        Validators.minLength(7),
        Validators.maxLength(16)
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(16)
      ])
    })
    if (this.authService.isLoggedIn()) {
      this.router.navigate(['posts']).then()
    }
  }

  error = false
  errorReg = false
  errorAuth = false
  confirm = false


  toggleError(){
    this.error = false
    this.errorReg = false
    this.errorAuth = false
    this.confirm = false
  }
  onSubmit() {
    if (this.auth.valid) {
      console.log('valid')
      if (localStorage.getItem(this.auth.value.login)) {
        this.errorReg = true
      } else {
        localStorage.setItem(this.auth.value.login, this.auth.value.password)

        this.auth.reset()
        this.confirm = true
      }
    } else {
      this.error = true
    }
  }

  onAuth() {
    this.AuthService.login(this.auth.value).subscribe({
      next: () => this.router.navigate(['posts']),
      error: (err) => alert(err.message)
    })
  }
}
