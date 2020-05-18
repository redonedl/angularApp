import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  data = {
    $key: '',
    name: '' ,
    address: '',
    city: '',
    country: '',
    skill: '',
    email: ''
  }

  uid: any
  itemList: AngularFireList<any>;
  itemArray = []

  constructor(public db: AngularFireDatabase, private router: Router, private route: ActivatedRoute) { 
    this.route.params.subscribe(params => {
      this.uid = params
      
    })

    this.itemList = db.list('skills')
    
    this.itemList.snapshotChanges()
        .subscribe(actions => {
          actions.forEach(action=>{
            let y = action.payload.toJSON()
            y["$key"] = action.key
            
            if( action.key === this.uid['id']){
              this.itemArray.push(y as ListItemClass)
              this.data.name = this.itemArray[0]['name']
              this.data.address = this.itemArray[0]['address']
              this.data.city = this.itemArray[0]['city']
              this.data.country = this.itemArray[0]['country']
              this.data.skill = this.itemArray[0]['skill']
              this.data.email = this.itemArray[0]['email']
              
            }
          })
        })

        console.log(this.data)
        

  }

  ngOnInit(): void {
    console.log(this.uid['id'])
  }

}

export class ListItemClass{
  $key: string;
  name: string;
  address: string;
  city: string;
  country: string;
  skill: string;
  emai: string;
}