import { Component, OnInit } from '@angular/core';
import { FormControlStatus } from '@angular/forms';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit{
  PostArrayData!: Array <any>
  
  constructor(private ps :PostService) {
    
  }


  

ngOnInit(): void {
  this.ps.loadData().subscribe(val=>{
   console.log(val)
   this.PostArrayData = val
   
  })
}

onDelete(postImgPath:any,id:any){
  this.ps.DeleteImage(postImgPath,id)
}

onFeatured( id:any, value : any){
  const FeaturedData = {
    isFeatured : value
  }
  this.ps.MarkFeatured(id,FeaturedData)
}

}
