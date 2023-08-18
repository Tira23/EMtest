import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostsComponent } from './components/posts/posts.component';
import { DetailsComponent } from './components/details/details.component';
import {HttpClientModule} from "@angular/common/http";
import { AuthComponent } from './components/auth/auth.component';
import {ReactiveFormsModule} from "@angular/forms";
import { NotFoundComponent } from './components/not-found/not-found.component';
import {AuthService} from "./components/auth/auth.service";

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    DetailsComponent,
    AuthComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
