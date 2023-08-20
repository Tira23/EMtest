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
import { ErrorDialogComponent } from './components/dialogPopup/errors/error-dialog/error-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    PostComponent,
    AuthComponent,
    LogOutDialogComponent,
    ErrorDialogComponent,
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
