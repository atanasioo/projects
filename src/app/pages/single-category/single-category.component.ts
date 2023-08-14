import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostuserService } from 'src/app/services/postuser.service';

@Component({
  selector: 'category',
  templateUrl: './single-category.component.html',
  styleUrls: ['./single-category.component.css']
})
export class SingleCategoryComponent implements OnInit {

  postArray!: Array<any>;
  categoryOBJ : any
  constructor(private route : ActivatedRoute, private PostUserService : PostuserService){}

  ngOnInit(): void {
    this.route.params.subscribe(val => {
      console.log(val)
      this.categoryOBJ = val
      this.PostUserService.LoadCategoryPostData(val['id']).subscribe(posts =>{
        this.postArray = posts
        console.log(posts);
      })
    })
  }
}
