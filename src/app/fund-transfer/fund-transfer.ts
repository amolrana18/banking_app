import { Component } from '@angular/core';
import { Bankservice } from '../bankservice';

@Component({
  selector: 'app-fund-transfer',
  standalone: false,
  templateUrl: './fund-transfer.html',
  styleUrl: './fund-transfer.css'
})
export class FundTransfer {
  allaccount: any;
  msg: string = "";
  msg2: string = "";

  constructor(public obj: Bankservice) {
    obj.getAccount().subscribe(data => {
      this.allaccount = data;
    });
  }

  getfundtransfer(ac: any, pin: any, amount: any, rac: any) {
    const dt = this.allaccount.filter((item: any) => item.acno == ac && item.pin == pin);

    if (dt.length > 0) {
      let currentbal = parseInt(dt[0].amount);
      let withdrawamt = parseInt(amount);

      if (withdrawamt <= currentbal) {
        let newbal = currentbal - withdrawamt;
        this.msg = `After withdraw ${amount}, Your Current Balance = ${newbal}`;

        let id = dt[0].id;
        let d = dt[0];
        d.amount = newbal;

        this.obj.updateAccount(id, d).subscribe();

        const dta = this.allaccount.filter((item: any) => item.acno == rac);
        if (dta.length > 0) {
          let currentBal2 = parseInt(dta[0].amount);
          let deposit_money2 = parseInt(amount);
          let newbal2 = currentBal2 + deposit_money2;

          let id2 = dta[0].id;
          let d2 = dta[0];
          d2.amount = newbal2;

          this.obj.updateAccount(id2, d2).subscribe(() => {
            this.msg2 = `After deposit ${amount}, Receiver's Current Balance = ${newbal2}`;
          });
        } else {
          this.msg2 = "Invalid receiver's account number!";
        }
      } else {
        this.msg = "Insufficient Balance!";
      }
    } else {
      this.msg = "Invalid Account or PIN!";
    }
  }
  
}
