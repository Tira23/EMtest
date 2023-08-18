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

  isLoggedIn(){ return !localStorage.getItem('token')}

logOut()
{
  if (confirm('Разлогиниться и вернуться на главную?')) {
    this.authService.logOut()
  }
}

title = 'EMtest';
}
