import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-group',
  templateUrl: './user-group.component.html',
  styleUrls: ['./user-group.component.css']
})
export class UserGroupComponent implements OnInit {
  @Input() groupData;
  @Input() userList;
  constructor() { }

  ngOnInit(): void {
  }
  getUserData(userId){
    // return this.userList.filter(user=> user.userId == userId)
    for(let i=0;i<this.userList.length;i++){
      if(userId == this.userList[i]['id']){
        console.log('this.userList[i][id] ',this.userList[i])
        return this.userList[i]
      }
    }
  }
}
