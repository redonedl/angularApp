import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';
import * as firebase from 'firebase/app';

import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  user : Observable<firebase.User>;
  isLoggedIn : boolean = false;
  isLoggedIn2 : boolean = false;


  
  constructor(public afAuth: AngularFireAuth, public router: Router) {
    /*
    let status = localStorage.getItem('isLoggedIn')
    if(status === 'true')
      this.isLoggedIn = true
      else
        this.isLoggedIn = false
    console.log("is logged in ? : "+this.isLoggedIn)
    */

    this.afAuth.authState.subscribe( auth => {
      if(auth)
      this.isLoggedIn = true
      else
      this.isLoggedIn = false

      console.log("is logged in 2 ? : "+ this.isLoggedIn)
    })

   }

  ngOnInit(): void {
  }

  logOut(){
    this.afAuth.signOut()
    this.isLoggedIn = false
    localStorage.setItem('isLoggedIn', 'false')
    this.router.navigate(['/login'])
  }

}
