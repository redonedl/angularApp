import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  myLogin: User = {
    email: '',
    password: '',
  }

  constructor(private fire: AngularFireAuth, private router: Router) { }

  ngOnInit(): void {
  }

  myRegistef(){
    this.fire.createUserWithEmailAndPassword(this.myLogin.email, this.myLogin.password)
        .then(user => {
          console.log(this.myLogin.email, this.myLogin.password)
          this.router.navigate(['home'])
        }).catch(error => {
          console.log(error)
        })
  }

}
