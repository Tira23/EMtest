import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {UserAlready} from "../../../../interface/dialog";

@Component({
  selector: 'app-userAlready-err',
  templateUrl: './userAlready-err.component.html',
  styleUrls: ['./userAlready-err.component.scss']
})
export class UserAlreadyErrComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public data?: UserAlready) {
  }

}
