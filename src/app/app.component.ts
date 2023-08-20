import {Component} from '@angular/core';
import {AuthService} from "./components/auth/auth.service";
import {MatDialog} from "@angular/material/dialog";
import {LogOutDialogComponent} from "./components/dialogPopup/log-out-dialog/log-out-dialog.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

export class AppComponent {
  constructor(private authService: AuthService, public dialog: MatDialog) {
  }

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(LogOutDialogComponent, {
      width: '250px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }

  isLoggedIn() {
    return this.authService.isLoggedIn()
  }
}
