import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-myskill',
  templateUrl: './myskill.component.html',
  styleUrls: ['./myskill.component.css']
})
export class MyskillComponent implements OnInit {

  data = {
    $key: '',
    name: '' ,
    address: '',
    city: '',
    country: '',
    skill: '',
  }

  myUid: string
  itemList: AngularFireList<any>;
  itemArray = []
  
  constructor(private afAuth: AngularFireAuth,db: AngularFireDatabase) { 
    this.itemList = db.list('skills')
    
    this.itemList.snapshotChanges()
        .subscribe(actions => {
          actions.forEach(action=>{
            let y = action.payload.toJSON()
            y["$key"] = action.key
            this.itemArray.push(y as ListItemClass)
          })
        })

        this.afAuth.authState.subscribe( auth => {
          if(auth){
            this.myUid = auth.uid
            console.log("UID : "+this.myUid)
          }
            
        })
        
  }

  ngOnInit(): void {

    let isDone: boolean = false;
    console.log(isDone);
    let name: string = "redouane";
    console.log("my name is "+name);
  }

  editForm($key){
    
    for(let value of this.itemArray){
      if(value['$key'] == $key){
        this.data.$key = value['$key'],
        this.data.name = value['name'],
        this.data.address = value['address'],
        this.data.city = value['city'],
        this.data.country = value['country'],
        this.data.skill = value['skill'],

        console.log($key)
        
      }
    }
    

  }

  onEdit($key){
    for(let value of this.itemArray){
      if(value['$key'] == $key){
        this.data.name 
        this.data.address 
        this.data.city 
        this.data.country 
        this.data.skill
        console.log(value['$key'])
        
        this.itemList.set($key,{
        name: this.data.name ,
        address: this.data.address ,
        city: this.data.city ,
        country: this.data.country ,
        skill: this.data.skill
        })
        
        this.itemArray = []
      }
      
    }
    
    
  }

  onDelete($key){
    if(confirm('Are you sure to delete this record') == true){
      this.itemList.remove($key);
      this.itemArray = []
    }
  }

  

}

export class ListItemClass{
  $key: string;
  name: string;
  address: string;
  city: string;
  country: string;
  skill: string;
}