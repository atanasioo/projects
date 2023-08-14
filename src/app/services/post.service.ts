import { Injectable, } from '@angular/core';
import { AngularFirestore, fromDocRef } from '@angular/fire/compat/firestore';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(
    private storage: AngularFireStorage,
    private afs: AngularFirestore,
    private toastr: ToastrService,
    private router: Router
  ) { }


  UploadImage(SelectedImage: any, postData: any,formStatus:any, id :any) {
    const FilePath = `postIMG/${Date.now()}`
    console.log(FilePath)

    this.storage.upload(FilePath, SelectedImage,).then(() => {
      console.log('post image uploaded successfully')

      this.storage.ref(FilePath).getDownloadURL().subscribe(URL => {
        postData.postImgPath = URL
        console.log(postData)

        if(formStatus == 'Edit'){
          this.UpdateData(id,postData)
        }else{
          this.SaveData(postData)
        }

        
       

      })
    })
  }

  SaveData(postData: any){
    this.afs.collection('posts').add(postData).then(DocRef => {
      this.toastr.success(' Data Inserted Successfully :) ')
      this.router.navigate(['/dashboard/posts'])
    })
  }

  loadData(){

    return this.afs.collection('posts').snapshotChanges().pipe(
     map(actions=>{
       return actions.map(actions=>{
         const data = actions.payload.doc.data()
         const id = actions.payload.doc.id
   
         return { id , data}
       })
     })
    )
   
    }

    LoadOneData(id:any){
      return this.afs.doc(`posts/${id}`).valueChanges()
    }

    UpdateData(id: any, postData: any){
      this.afs.doc(`posts/${id}`).update(postData).then(()=>{
        this.toastr.success(' Data Updated Successfully ')
        this.router.navigate(['/dashboard/posts'])
      })
    }
    DeleteImage(PostImgPath:any,id:any){
      this.storage.storage.refFromURL(PostImgPath).delete().then(()=>{
        this.DeleteData(id)
      })
    }
    DeleteData(id: any){
      this.afs.doc(`posts/${id}`).delete().then(()=>{
        this.toastr.warning('Data Deleted')
      })
    }

    MarkFeatured(id:any,FeaturedData:any){
      this.afs.doc(`posts/${id}`).update(FeaturedData).then(()=>{
        this.toastr.info('Featured Status Updated')
      })
    }
}














// import { Injectable } from '@angular/core';
// import { getStorage, ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
// import { getFirestore, collection, addDoc } from 'firebase/firestore';
// import { ToastrService } from 'ngx-toastr';
// import { getApp } from '@angular/fire/app';


// @Injectable({
//   providedIn: 'root'
// })
// export class PostService {
  
//   private storage = getStorage(getApp());
//   private firestore = getFirestore(getApp());

//   constructor(private toastr: ToastrService) { }

//   UploadImage(SelectedImage: any, postData: any) {
//     const FilePath = `postIMG/${Date.now()}`
//     console.log(FilePath)

//     const storageRef = ref(this.storage, FilePath);

//     uploadBytesResumable(storageRef, SelectedImage).then((snapshot) => {
//       console.log('post image uploaded successfully');

//       getDownloadURL(snapshot.ref).then(URL => {
//         postData.postImgPath = URL;
//         console.log(postData);

//         addDoc(collection(this.firestore, 'posts'), postData).then(() => {
//           this.toastr.success('Data Inserted Successfully :)');

//       })
//     })
//   }
//  ) }
// }











// import { Injectable } from '@angular/core';
// import { ToastrService } from 'ngx-toastr';
// import firebase from 'firebase/compat/app';
// import 'firebase/storage';

// @Injectable({
//   providedIn: 'root'
// })
// export class PostService {
  

//   constructor(private toastr: ToastrService) { }

//   UploadImage(SelectedImage: any, postData: any) {
//     const FilePath = `postIMG/${Date.now()}`
//     console.log(FilePath)

//       const storageRef = firebase.storage().ref();
  

//      const uploadTask = storageRef.child(FilePath).put(SelectedImage);

//      uploadTask.on(
//       firebase.storage.TaskEvent.STATE_CHANGED,
//       (snapshot) => {
//         const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
//         console.log('Upload progress:', progress);
//       }
//     );
// }
// }