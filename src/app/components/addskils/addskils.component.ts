import { Component, OnInit } from '@angular/core';
import { Skill } from 'src/app/models/skill';
import { Observable } from 'rxjs/internal/Observable';
import { AngularFireDatabase ,AngularFireList } from '@angular/fire/database';
import { AngularFireAuth } from '@angular/fire/auth';


@Component({
  selector: 'app-addskils',
  templateUrl: './addskils.component.html',
  styleUrls: ['./addskils.component.css']
})
export class AddskilsComponent implements OnInit {
name="skill"
success: boolean
uid: string
email: string

  mySkill: Skill = {
    name: '',
    address: '',
    city: '',
    country: '',
    skill: ''
  }

  itemList: AngularFireList<any>;

  constructor(private afAuth: AngularFireAuth, db: AngularFireDatabase) {
    this.itemList = db.list('skills')

    this.afAuth.authState.subscribe( auth => {
      if(auth){
        this.uid = auth.uid
        this.email = auth.email
      }
    })
  }

  ngOnInit(): void {
    console.log(this.mySkill)
  }

  addSkill(){
    this.itemList.push({
      name: this.mySkill.name,
      address: this.mySkill.address,
      city: this.mySkill.city,
      country: this.mySkill.country,
      skill: this.mySkill.skill,
      email: this.email,
      uid: this.uid
    })
    this.success = true
    this.resetSkill()
  }

  resetSkill(){
    this.mySkill = {
      name: '',
      address: '',
      city: '',
      country: '',
      skill: ''
    }
  }

}
