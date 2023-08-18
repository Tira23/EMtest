import {Component, OnInit} from '@angular/core';
import {AppService} from "../../app.service";
import {Post} from "../../interface/posts";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
})
export class PostsComponent implements OnInit{

  constructor(private appService: AppService) {}
  posts:Post[] = []
  loading = true
  ngOnInit() {
    this.appService.getAll().subscribe(data => {
      this.posts = data
      this.loading = false
    })

  }

}
