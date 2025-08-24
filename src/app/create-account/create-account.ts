import { Component } from '@angular/core';
import { Bankservice } from '../bankservice';
import { subscribeOn } from 'rxjs';

@Component({
  selector: 'app-create-account',
  standalone: false,
  templateUrl: './create-account.html',
  styleUrl: './create-account.css'
})
export class CreateAccount {
  allAccount:any

  constructor(public obj:Bankservice)
  {
   this.obj.getAccount().subscribe(data=>{
      this.allAccount=data
   })
  }
cAccount(pin:any ,name:any,fname:any,email:any,gender:any,phone:any,country:any,state:any,city:any,amount:any)
{ 

 
  var acno="SBI101"
  if(this.allAccount.length>0){
    var x =this.allAccount.length
    x=x+101
    acno="SBI"+ x
  }
  else
    acno="SBI101"
    var account ={
      acno: acno,
    pin: pin,
    name: name,
    fname: fname,
    email: email,
    phone: phone,
    gender: gender,
    country: country,
    state: state,
    city: city,
    amount: amount

    }
    this.obj.createAccount(account).subscribe(data=>{
      console.log("account created succesfully")
        location.reload();
    })
}
}
