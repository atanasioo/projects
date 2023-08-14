import { Component } from '@angular/core';
import { Sub } from 'src/app/models/sub';
import { SubscribersService } from 'src/app/services/subscribers.service';

@Component({
  selector: 'subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.css']
})
export class SubscriptionComponent {

  IsEmailError : boolean = false
  IsSubsribed : boolean = false
constructor(private sub : SubscribersService){}




  onSubmit(FormVal:any){
    const SubData : Sub = {
      name : FormVal.name,
      email : FormVal.email
    }

     
    this.sub.CheckSubscriber(SubData.email).subscribe(val=>{
      console.log(val)

      if(val.empty){
        this.sub.AddSubscriber(SubData)
        this.IsSubsribed = true
      }
      else{
        this.IsEmailError = true
      }
    })
  }
  
}
