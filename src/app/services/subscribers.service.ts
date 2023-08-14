import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ToastrService } from 'ngx-toastr';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubscribersService {
  

  constructor(private afs: AngularFirestore, private toastr : ToastrService) { }

 AddSubscriber(SubData:any){
  this.afs.collection('subscribers').add(SubData).then(()=>{
    console.log('subscriber saved succefully')
  })
 }


 CheckSubscriber(SubscriberEmail:any){
  return this.afs.collection('subscribers', ref => ref.where('email', '==', SubscriberEmail)).get()
 }


 LoadSubscribers(){
  return this.afs.collection('subscribers').snapshotChanges().pipe(
    map(actions=>{
      return actions.map(actions=>{
        const data = actions.payload.doc.data()
        const id = actions.payload.doc.id
  
        return { id , data}
      })
    })
   )
}

DeleteSubscriber(id: any ){
  this.afs.doc(`subscribers/${id}`).delete().then(myData => {
    this.toastr.success(' Subscriber Deleted Successfully :) ')
  })
  }

}
