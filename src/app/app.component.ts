import { Component } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userList = [];
  groupData = [];
  tempUserIdList = [];
  groupDescription = '';
  groupName = '';
  alertIfInfoMiss = false;
  constructor(private _dataService : DataService){}
  ngOnInit(){
    this.groupData = JSON.parse(sessionStorage.getItem('groupData'))?JSON.parse(sessionStorage.getItem('groupData')):[]
    this._dataService.getUserList().subscribe((res:any)=>{
      res.map((user,index)=>{
        user['isChecked']=false
      })
      this.userList = res
    },error=>{
      alert('Something went wrong!')
    })
  }
  createGroup(){
    if(!this.tempUserIdList.length){
      alert('Please select user from check box.')
    }else{
      console.log(this.groupName ,' - ', this.groupDescription)
      if(this.groupName.length && this.groupDescription.length){
      this.alertIfInfoMiss = false
      this.groupData.push({
        'groupName':this.groupName,
        'groupDescription':this.groupDescription,
        'groupUserList':this.tempUserIdList
      })
      sessionStorage.setItem('groupData',JSON.stringify(this.groupData));
      this.groupData = JSON.parse(sessionStorage.getItem('groupData'))
      alert('OK')

      }else{
      this.alertIfInfoMiss = true
      // alert('Please Fill Group Name and Description as well.')
      }
    }
  }
  selectAndUnslectUserId(userId){
    console.log('this.tempUserIdList.filter(user => user === userId).length  ',this.tempUserIdList.filter(user => user === userId).length )
    if(this.tempUserIdList.filter(user => user === userId).length === 1){
      var index = this.tempUserIdList.indexOf(userId);
      this.tempUserIdList.splice(index, 1);
      console.log('tempUserIdList ',this.tempUserIdList)
    }else{
      this.tempUserIdList.push(userId)
      console.log('tempUserIdList ',this.tempUserIdList)
    }   
  }
  unSelectUsers(){
    console.log('reloading')
    alert('re')
    window.location.reload()
  }
}
