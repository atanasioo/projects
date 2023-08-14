import { Component, Inject, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/models/post';
import { CategoriesService } from 'src/app/services/categories.service';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent implements OnInit {
  categories!: Array<any>;
  permalink: string = ''
  imgsrc: any = './assets/placeholder-image.png'
  SelectedImage: any
  PostForm!: FormGroup
  post: any
  FormStatus: any = 'Add New'
  DocId : any

  constructor(
    private categoryService: CategoriesService,
    private Fb: FormBuilder,
    private ps: PostService,
    private route: ActivatedRoute
  ) {

    this.route.queryParams.subscribe(val => {
      this.DocId = val['id']
      if(this.DocId){
        this.ps.LoadOneData(val['id']).subscribe(post => {
          this.post = post
          this.PostForm = this.Fb.group({
            title: [this.post.title, [Validators.required, Validators.minLength(5)]],
            permalink: [this.post.permalink, Validators.required],
            excerpt: [this.post.excerpt, [Validators.required, Validators.minLength(20)]],
            category: [this.post.category.categoryID, Validators.required],
            postImg: ['', Validators.required],
            content: [this.post.content, Validators.required]
          })
  
          this.imgsrc = this.post.postImgPath
          this.FormStatus = 'Edit'
          
        })
      } else{
        this.PostForm = this.Fb.group({
          title: ['', [Validators.required, Validators.minLength(5)]],
          permalink: ['', Validators.required],
          excerpt: ['', [Validators.required, Validators.minLength(20)]],
          category: ['', Validators.required],
          postImg: ['', Validators.required],
          content: ['', Validators.required]
        })
      }
      
    })




  }

  ngOnInit(): void {
    this.categoryService.loadData().subscribe(val => {
      this.categories = val
    })
  }

  get fc() {
    return this.PostForm.controls
  }

  onTitleChanged($event: any) {
    const title = $event.target.value
    this.permalink = title.replace(/\s/g, '-')


  }

  showImage($event: any) {
    const reader = new FileReader()
    reader.onload = (read) => {
      this.imgsrc = read.target?.result
    }

    reader.readAsDataURL($event?.target.files[0])
    this.SelectedImage = $event?.target.files[0]
  }

  onSubmit() {

    let splitted = this.PostForm.value.category.split('-')
    console.log(splitted)
    const postData: Post = {
      title: this.PostForm.value.title,
      permalink: this.PostForm.value.permalink,
      category: {
        categoryID: splitted[0],
        category: splitted[1]
      },
      postImgPath: '',
      excerpt: this.PostForm.value.excerpt,
      content: this.PostForm.value.content,
      isFeatured: false,
      views: 0,
      status: 'new',
      createdAt: new Date()

    }
    this.ps.UploadImage(this.SelectedImage, postData,this.FormStatus,this.DocId)
    this.PostForm.reset()
    this.imgsrc = './assets/placeholder-image.png'
   
  }


}

