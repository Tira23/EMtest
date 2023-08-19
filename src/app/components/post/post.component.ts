import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {AppService} from "../../app.service";
import {Post} from "../../interface/posts";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit{
  constructor(private route: ActivatedRoute, private appService: AppService) {
  }
  post:Post = {} as Post
  loading = true
  ngOnInit() {

    this.route.params.subscribe(params => {
      const id = params['id'];
      this.appService.getDetails(id).subscribe(data => {
        this.post = data
        this.loading = false
      })
    });
  }
}