import { Component } from '@angular/core';
import { Bankservice } from '../bankservice';

@Component({
  selector: 'app-account-summarry',
  standalone: false,
  templateUrl: './account-summarry.html',
  styleUrl: './account-summarry.css'
})
export class AccountSummarry {
  allacount:any
  msg:any=""

  constructor(public obj:Bankservice){
    obj.getAccount().subscribe(data=>{
      this.allacount=data
    })
  }

  getuserinfo(ac:any){
    var dt= this.allacount.filter((item:any)=>item.acno==ac)
    let name=dt[0].name
    let father_Name=dt[0].father_Name
    let id=dt[0].id
    let Email=dt[0].Email
    let Phone=dt[0].Phone
    let gender=dt[0].gender
    let state=dt[0].state
    let country=dt[0].country
    let city=dt[0].city
    let amount=dt[0].amount
    if(dt.length > 0){

      this.msg=`
      User id : ${id}
      User Name : ${name}
      User email id  : ${Email}
      User father name : ${father_Name}
      User phone number : ${Phone}
      User gender : ${gender}
      User address : ${city},${state},${country}
      User account balance : ${amount}

      `

    }
    else{
      this.msg=`please enter valid account number`
    }

  }

}
