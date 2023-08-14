import { Component, OnInit } from '@angular/core';
import { PostuserService } from 'src/app/services/postuser.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  FeaturedPostArray!: Array<any>
  LatestPostArray! : Array<any>
  constructor(private PostUserService : PostuserService){

  }

  ngOnInit(): void {

    this.PostUserService.LoadFeatured().subscribe(val =>{
      this.FeaturedPostArray = val
    })
    
    this.PostUserService.LoadLatest().subscribe(val =>{
      this.LatestPostArray = val
    })
  }



}
