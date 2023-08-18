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

  logOut() {
    if (confirm('Вы уверены?')) {
      this.authService.logOut()
    }
  }

  title = 'EMtest';
}
