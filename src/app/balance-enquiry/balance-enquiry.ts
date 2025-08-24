import { Component } from '@angular/core';
import { Bankservice } from '../bankservice';

@Component({
  selector: 'app-balance-enquiry',
  standalone: false,
  templateUrl: './balance-enquiry.html',
  styleUrl: './balance-enquiry.css'
})
export class BalanceEnquiry {
  allaccount:any
  msg:any=""
  constructor(public obj:Bankservice){
    obj.getAccount().subscribe(data=>{
      this.allaccount=data
    })
  }
  getbalance(ac:any,pin:any){
    const dt=this.allaccount.filter((item:any)=>item.acno==ac && item.pin==pin)
    if(dt.length>0){
       let currentbal = parseInt(dt[0].amount);
       this.msg=`account balance is : ${currentbal}`
    }
    else{

      this.msg=`please enter valid account number or pin`
    }
  }

}
