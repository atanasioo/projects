import { Component, OnInit } from '@angular/core';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore/';
import { AngularFirestoreCollection } from '@angular/fire/compat/firestore/collection/collection';
import { Category } from 'src/app/models/category';
import { CategoriesService } from 'src/app/services/categories.service';

@Component({
  selector: 'app-categoriesedit',
  templateUrl: './categoriesedit.component.html',
  styleUrls: ['./categoriesedit.component.css']
})
export class CategorieseditComponent implements OnInit {
  categoryArray : any[] = [];
  formCategory : string = ''
  formStatus : string = 'Add'
  categoryId : string = ''
  ngOnInit(): void {
    this.categoryService.loadData()
    .subscribe(val => { console.log(val)
      this.categoryArray = val
    })
  }
constructor( private categoryService : CategoriesService){}
  
onSubmit( formData : {
  reset: any
  value: { category: string; }
  }){

  let categoryData : Category = {
    category : formData.value.category
   }

   if (this.formStatus == 'Add') {
    this.categoryService.saveData(categoryData)
    formData.reset()
   }

   else if (this.formStatus == 'Edit'){
    this.categoryService.updateData(this.categoryId , categoryData)
    formData.reset()
    this.formStatus = 'Add'
   }
  }
  

  OnEdit(category: string , id: any){
    this.formCategory = category
    this.formStatus = 'Edit'
    this.categoryId = id
  }

  OnDelete(id: any){
 this.categoryService.deleteData(id)
 
  }
}

    // let subCategoryData = {
    //   subCategory : 'subCategory1'
    //    }
    
    // this.afs.collection('categories').add(categoryData)
    // .then(mydata => {console.log(mydata)

    //   //  this.afs.doc(`categories/${mydata.id}`).collection('subcategories').add(subCategoryData)

    // this.afs.collection('categories').doc(mydata.id).collection('subcategories').add(subCategoryData)
    // .then(mydata1=>{console.log(mydata1)


    //   //  this.afs.doc(`categories/${mydata.id}/subcategories/${mydata1.id}`).collection('subsubcategories').add(subCategoryData)

    // this.afs.collection('categories').doc(mydata.id).collection('subcategories').doc(mydata1.id).collection('subsubcategories').add(subCategoryData)
    // .then(mydata2 =>{console.log('second level subcategory added')})

    // })

    // })
    // .catch(err =>{console.log(err)})
  










  // this.afs.collection('categories').add(this.categoryentered).then(docRef =>{
  //   console.log(docRef)
  // })
  // .catch(err => {console.log(err)})
  
// }
// }
  // private itemsCollection: AngularFirestoreCollection<>;
  
  // constructor(private afs: AngularFirestore) {
  //   this.itemsCollection = afs.collection<>('items');
  //   this.items = this.itemsCollection.valueChanges();
  // }
  // addItem(item: ) {
  //   this.itemsCollection.add(item);
  // }
  // console.log(this.categoryentered)
  // let categoryData = {
  //   category: formData.value.category
  // }
  // console.log(categoryData)
// }
// }
