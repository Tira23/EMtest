import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {DialogErrorData} from "../../../../interface/dialog";

@Component({
  selector: 'app-login-err',
  templateUrl: './login-err.component.html',
  styleUrls: ['./login-err.component.scss']
})
export class LoginErrComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data?: DialogErrorData) {
  }

}
