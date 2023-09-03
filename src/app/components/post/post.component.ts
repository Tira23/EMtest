import {Component, HostListener, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {AppService} from "../../app.service";
import {Post} from "../../interface/posts";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})

export class PostComponent implements OnInit, OnDestroy{
  constructor(private route: ActivatedRoute, private appService: AppService, private router:Router) {
  }
  post:Post = {} as Post
  loading = true
  subscription$?: Subscription
  ngOnInit() {

    this.subscription$ = this.route.params.subscribe(params => {
      const id = params['id'];
      this.appService.getDetails(id).subscribe(data => {
        this.post = data
        this.loading = false
      })
    });
  }
  @HostListener('window:keydown.escape')
  exit(){
    this.router.navigate([`post`]).then()
  }

  ngOnDestroy(): void {
    this.subscription$?.unsubscribe()
  }
}
