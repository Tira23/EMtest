import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {DialogErrorData} from "../../../../interface/dialog";


@Component({
  selector: 'app-errors-dialog',
  templateUrl: './register-err.component.html',
  styleUrls: ['./register-err.component.scss']
})
export class RegisterErrComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogErrorData) {
  }

}
