import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Router } from '@angular/router';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  itemList: AngularFireList<any>;
  itemArray = []
  
  constructor(db: AngularFireDatabase, public router: Router,) {

    this.itemList = db.list('skills')
    
    this.itemList.snapshotChanges()
        .subscribe(actions => {
          actions.forEach(action=>{
            let y = action.payload.toJSON()
            y["$key"] = action.key
            this.itemArray.push(y as ListItemClass)
          })
        })

        
  }

  ngOnInit(): void {
  }

  details(key){
    console.log(key)
    this.router.navigate(['details/'+key])
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