import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor(private authservice :AuthService){}

  UserEmail : string = ''
  IsLoggedIn$!: Observable<boolean>;
  
  ngOnInit(): void {
    
    this.UserEmail =  JSON.parse(localStorage.getItem('user') || '{}').email;

  this.IsLoggedIn$ =  this.authservice.isLoggedIn()
  
}
onlogout(){
  this.authservice.Logout()
}
}
