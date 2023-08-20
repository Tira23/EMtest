import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

import {Router} from "@angular/router";
import {AuthService} from "./auth.service";
import {MatDialog} from "@angular/material/dialog";
import {ErrorDialogComponent} from "../dialogPopup/errors/error-dialog/error-dialog.component";
import {DialogErrorData} from "../../interface/dialog";

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


  openDialog() {
    console.log()
    this.dialog.open<ErrorDialogComponent, DialogErrorData>(ErrorDialogComponent,
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
        // this.openDialog()
      } else {
        localStorage.setItem(this.auth.value.login, this.auth.value.password)
        this.auth.reset()
        this.confirm = true
      }
    } else {
      this.openDialog()
    }
  }


  onAuth() {
    if (!this.auth.valid) {
      return
    }
    this.AuthService.login(this.auth.value).subscribe({
      next: () => this.router.navigate(['posts']),
      // error: () => this.openDialog()
    })
  }
}
