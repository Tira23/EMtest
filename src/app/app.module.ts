import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {PostsComponent} from './components/posts/posts.component';
import {PostComponent} from './components/post/post.component';
import {HttpClientModule} from "@angular/common/http";
import {AuthComponent} from './components/auth/auth.component';
import {ReactiveFormsModule} from "@angular/forms";
import {AuthService} from "./components/auth/auth.service";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MatListModule} from "@angular/material/list";
import {MatCardModule} from "@angular/material/card";
import {MatRippleModule} from "@angular/material/core";
import {LogOutDialogComponent} from './components/dialogPopup/log-out-dialog/log-out-dialog.component';
import {MatDialogModule} from "@angular/material/dialog";
import { RegisterErrComponent } from './components/dialogPopup/errors/register-err/register-err.component';
import { UserAlreadyErrComponent } from './components/dialogPopup/errors/userAlready-err/userAlready-err.component';
import { LoginErrComponent } from './components/dialogPopup/errors/login-err/login-err.component';
import { TextTransformPipe } from './components/pipes/text-transform.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    PostComponent,
    AuthComponent,
    LogOutDialogComponent,
    RegisterErrComponent,
    UserAlreadyErrComponent,
    LoginErrComponent,
    TextTransformPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatListModule,
    MatCardModule,
    MatRippleModule,
    MatDialogModule
  ],
  providers: [
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
