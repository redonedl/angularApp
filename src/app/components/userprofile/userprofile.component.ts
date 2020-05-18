import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent implements OnInit {

  email: string
  constructor() {
    this.email = localStorage.getItem('email')
   }

  ngOnInit(): void {
    console.log("My Email = "+this.email)
  }

}
