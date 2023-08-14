import { Component, OnInit } from '@angular/core';
import { CategoriesuserService } from 'src/app/services/categoriesuser.service';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  constructor(private cs : CategoriesuserService){}

   CategoryEditArray! : Array<any>

  ngOnInit(): void {
    this.cs.LoadCategoriesData().subscribe(val =>{
       this.CategoryEditArray = val
    })
  }

  

}
