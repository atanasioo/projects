import { Component, OnInit } from '@angular/core';
import { SubscribersService } from 'src/app/services/subscribers.service';

@Component({
  selector: 'app-subscribers',
  templateUrl: './subscribers.component.html',
  styleUrls: ['./subscribers.component.css']
})
export class SubscribersComponent implements OnInit {

 SubscribersArray! : Array<any>

constructor(private subservice :SubscribersService){}

ngOnInit(): void {
  this.subservice.LoadSubscribers().subscribe(val =>{
    this.SubscribersArray = val
  })
}


onDelete(id:any){
  this.subservice.DeleteSubscriber(id)
}
}
