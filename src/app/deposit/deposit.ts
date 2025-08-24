import { Component } from '@angular/core';
import { Bankservice } from '../bankservice';

@Component({
  selector: 'app-deposit',
  standalone: false,
  templateUrl: './deposit.html',
  styleUrl: './deposit.css'
})
export class Deposit {
  msg: any = "";
  allaccount: any;

  constructor(public obj: Bankservice) {
    obj.getAccount().subscribe(data => {
      this.allaccount = data;
    });
  }

  getdeposit(ac: any, amount: any) {
    var dt = this.allaccount.filter((item: any) => item.acno == ac);
    if (dt.length > 0) {
      let currentBal = parseInt(dt[0].amount);
      let deposit_money = parseInt(amount);
      let newbal = currentBal + deposit_money;

      var id = dt[0].id;
      var d = dt[0];
      d.amount = newbal;

      this.obj.updateAccount(id, d).subscribe(data => {
        this.msg = "After deposit " + amount + " your current balance is = " + newbal;
      });
    } else {
      this.msg = "Invalid account number";
    }
  }
}
