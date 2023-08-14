import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class CategoriesuserService {

  constructor(private afs : AngularFirestore , ) { }


  LoadCategoriesData(){

    return this.afs.collection('categories').snapshotChanges().pipe(
     map(actions=>{
       return actions.map(actions=>{
         const data = actions.payload.doc.data()
         const id = actions.payload.doc.id
   
         return { id , data}
       })
     })
    )
   
    }

}
