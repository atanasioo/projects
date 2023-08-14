import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { map } from 'rxjs';
import * as firebase from 'firebase/compat/app'

@Injectable({
  providedIn: 'root'
})
export class PostuserService {

  constructor( private afs :AngularFirestore) { }

  LoadFeatured(){

    return this.afs.collection('posts', ref => ref.where('isFeatured', '==', true).limit(4)).snapshotChanges().pipe(
     map(actions=>{
       return actions.map(actions=>{
         const data = actions.payload.doc.data()
         const id = actions.payload.doc.id
   
         return { id , data}
       })
     })
    )
   
    }

  LoadLatest(){

    return this.afs.collection('posts', ref => ref.orderBy('createdAt')).snapshotChanges().pipe(
      map(actions=>{
        return actions.map(actions=>{
          const data = actions.payload.doc.data()
          const id = actions.payload.doc.id
    
          return { id , data}
        })
      })
     )

  }
 
  LoadCategoryPostData(categoryID: any) {
   
    return this.afs.collection('posts', ref => ref.where('isFeatured', '==', true)).snapshotChanges().pipe(
      map(actions => {
        return actions.map(action => {
          const data = action.payload.doc.data() ;
          const id = action.payload.doc.id;
          return { id, data };
        });
      })
    );
  }

  LoadOnePost(postID:any){
   return this.afs.doc(`posts/${postID}`).valueChanges()
  }

  LoadSimilar(CatId:any){
    return this.afs.collection('posts', ref => ref.where('category.categoryID', '==', CatId).limit(3)).snapshotChanges().pipe(
      map(actions => {
        return actions.map(action => {
          const data = action.payload.doc.data() ;
          const id = action.payload.doc.id;
          return { id, data };
        });
      })
    );
  }

  CountViews(PostId:any){

   const viewscount = {
    views: firebase.default.firestore.FieldValue.increment(1)
   }

    this.afs.doc(`posts/${PostId}`).update(viewscount).then(()=>{
      console.log('views count updated...')
    })
  }
}
