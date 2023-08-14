import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostuserService } from 'src/app/services/postuser.service';

@Component({
  selector: 'post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.css']
})
export class SinglePostComponent implements OnInit {
  OnePostData : any
  SimilarPostArray! : Array<any>
constructor(
  private activatedroute : ActivatedRoute, 
  private postuserservice : PostuserService
  ){}

ngOnInit(): void {
  this.activatedroute.params.subscribe(val =>{
    this.postuserservice.CountViews(val['id'])
    this.postuserservice.LoadOnePost(val['id']).subscribe(post =>{
      this.OnePostData = post
      this.LoadSimilarPost(this.OnePostData.category.categoryID)
    })
  })



}

LoadSimilarPost(CatId:any){
  this.postuserservice.LoadSimilar(CatId).subscribe(val =>{
  this.SimilarPostArray = val
  })
}




}
