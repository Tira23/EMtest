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
      login: new FormControl('', [Validators.required, Validators.minLength(7), Validators.maxLength(16)]),
      password: new FormControl('', [Validators.required, Validators.minLength(7), Validators.maxLength(16)])
    })
    if (this.authService.isLoggedIn()) {
      this.router.navigate(['posts']).then()
    }
  }

  error = false
  errorReg = false
  errorAuth = false
  confirm = false

  toggleNotification(notificationType: 'errorReg' | 'error' | 'confirm') {
    this[notificationType] = true;
    setTimeout(() => {
      this[notificationType] = false;
    }, 5000);
  }

  onSubmit() {
    if (this.auth.valid) {
      if (localStorage.getItem(this.auth.value.login)) {
        this.toggleNotification("errorReg")
      } else {
        localStorage.setItem(this.auth.value.login, this.auth.value.password)
        this.auth.reset()
        this.toggleNotification('confirm')
      }
    } else {
      this.toggleNotification('error')
    }
  }

  onAuth() {
    this.AuthService.login(this.auth.value).subscribe({
      next: () => this.router.navigate(['posts']),
      error: (err) => alert(err.message)
    })
  }
}
