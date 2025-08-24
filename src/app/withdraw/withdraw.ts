import { Component } from '@angular/core';
import { Bankservice } from '../bankservice';

@Component({
  selector: 'app-withdraw',
  standalone: false,
  templateUrl: './withdraw.html',
  styleUrl: './withdraw.css'
})
export class Withdraw {
  msg:any=""
  allaccount:any
  constructor(public obj:Bankservice){
    obj.getAccount().subscribe(data=>{
      this.allaccount=data
    })
  }
  getwithdraw(ac:any,pin:any,amount:any){
    var dt = this.allaccount.filter((item: any) => item.acno == ac && item.pin == pin);
     if (dt.length > 0) {
      let currentbal = parseInt(dt[0].amount);
      let withdrawamt = parseInt(amount);

      if (withdrawamt <= currentbal) {
        let newbal = currentbal - withdrawamt;
        this.msg = `Withdraw successful  New Balance = ${newbal}`;
        var id=dt[0].id
        var d=dt[0]
        d.amount = newbal; 
        this.obj.updateAccount(id,d).subscribe(data=>{

     })
    this.msg="After witdraw "+amount+" Your Current blacne is  = "+newbal
  
}
  else {
  this.msg = "Insufficient Balance!";
 }
} 
    
    else {
      this.msg = "Invalid Account or PIN  " ;
    }

    
  }


}
