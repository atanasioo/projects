import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  LoggedIn :BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false)
  isLoggedInGuard : boolean = false
  constructor( private afa : AngularFireAuth , private toastr : ToastrService, private router : Router) { }

  login( email: any, password: any){
    this.afa.signInWithEmailAndPassword(email,password).then((log)=>{
      this.toastr.success(' Logged In Successfully ')
      this.LoadUser()
      this.LoggedIn.next(true)
      this.isLoggedInGuard = true
      this.router.navigate(['/dashboard'])
      
    }).catch(e=>{
      this.toastr.warning(e)
    })
  }

  LoadUser(){
    this.afa.authState.subscribe(user =>{
      localStorage.setItem('user', JSON.stringify(user))
    })
  }

  Logout(){
    this.afa.signOut().then(()=>{
      this.toastr.success('User Logged Out Successfully')
      localStorage.removeItem('user')
      this.LoggedIn.next(false)
      this.isLoggedInGuard = true
      this.router.navigate(['/login'])
      
    })
  }

  isLoggedIn(){
    return this.LoggedIn.asObservable()
  }

}
