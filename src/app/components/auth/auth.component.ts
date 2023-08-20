import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

import {Router} from "@angular/router";
import {AuthService} from "./auth.service";
import {MatDialog} from "@angular/material/dialog";
import {RegisterErrComponent} from "../dialogPopup/errors/register-err/register-err.component";
import {DialogErrorData} from "../../interface/dialog";
import {UserAlreadyErrComponent} from "../dialogPopup/errors/userAlready-err/userAlready-err.component";
import {LoginErrComponent} from "../dialogPopup/errors/login-err/login-err.component";

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
    private authService: AuthService,
    public dialog: MatDialog
  ) {
  }

  confirm = false


  dialogUserAlreadyError() {
    this.dialog.open<UserAlreadyErrComponent>(UserAlreadyErrComponent);
  }

  dialogLoginError() {
    this.dialog.open<LoginErrComponent>(LoginErrComponent);
  }

  dialogRegisterError() {
    this.dialog.open<RegisterErrComponent, DialogErrorData>(RegisterErrComponent,
      {
        data: {
          login: this.auth.controls['login'].valid,
          password: this.auth.controls['password'].valid
        }
      }
    );
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


  register() {
    if (this.auth.valid) {
      if (localStorage.getItem(this.auth.value.login)) {
        this.dialogUserAlreadyError()
      } else {
        localStorage.setItem(this.auth.value.login, this.auth.value.password)
        this.auth.reset()
        this.confirm = true
      }
    } else {
      this.dialogRegisterError()
    }
  }


  onAuth() {
    if (!this.auth.valid) {
      this.dialogRegisterError()
      return
    }
    this.AuthService.login(this.auth.value).subscribe({
      next: () => this.router.navigate(['posts']),
      error: () => this.dialogLoginError()
    })
  }
}
