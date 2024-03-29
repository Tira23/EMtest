import {Component, OnDestroy, OnInit} from '@angular/core';
import {AppService} from "../../app.service";
import {Post} from "../../interface/posts";
import {Router} from "@angular/router";
import {Subscription} from "rxjs";


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit, OnDestroy{

  constructor(private appService: AppService, private router: Router) {}


  color = '#3f51b57d';
  posts:Post[] = []
  loading = true
  subscription$?: Subscription

  click(id:number){
    this.router.navigate([`post/${id}`]).then()
  }
  ngOnInit() {
   this.subscription$ = this.appService.getAll().subscribe(data => {
      this.posts = data
      this.loading = false
    })
  }
  ngOnDestroy(): void {
    this.subscription$?.unsubscribe()

  }

}
