import {Component} from '@angular/core';
import {AuthService} from "./components/auth/auth.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

export class AppComponent {
  constructor(private authService: AuthService) {
  }



  isLoggedIn() {
    return this.authService.isLoggedIn()
  }

  logOut() {
      this.authService.logOut()

  }

  title = 'EM-test';
}
