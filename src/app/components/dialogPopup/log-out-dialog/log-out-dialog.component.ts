import { Component } from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";
import {AuthService} from "../../auth/auth.service";

@Component({
  selector: 'app-log-out-dialog',
  templateUrl: './log-out-dialog.component.html',
  styleUrls: ['./log-out-dialog.component.scss']
})
export class LogOutDialogComponent {

  constructor(public dialogRef: MatDialogRef<LogOutDialogComponent>, private authService: AuthService) {
  }

  logOut() {
    this.authService.logOut()
  }

}
