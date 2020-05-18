import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  myLogin: User = {
    email: '',
    password: '',
  }
  uid: any

  constructor(private fire: AngularFireAuth, private router: Router) { }

  ngOnInit(): void {
  }

  logIn(){
    
    this.fire.signInWithEmailAndPassword(this.myLogin.email, this.myLogin.password)
        .then(user => {
          localStorage.setItem('isLoggedIn', 'true')
          
          console.log(this.myLogin.email, this.myLogin.password)
          this.router.navigate(['home'])
        }).catch(error => {
          console.log(error)
        })

        this.fire.authState.subscribe( auth => {
          if(auth){
            this.uid = auth.uid
            localStorage.setItem('uid', auth.uid)
          }
        })
  }

}
