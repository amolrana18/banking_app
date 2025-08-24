import { Component } from '@angular/core';
import { AnyCatcher } from 'rxjs/internal/AnyCatcher';
import { Bankservice } from '../bankservice';

@Component({
  selector: 'app-pin-change',
  standalone: false,
  templateUrl: './pin-change.html',
  styleUrl: './pin-change.css'
})
export class PinChange {
  allaccount:any
  msg:any=""

  constructor(public obj:Bankservice){
    obj.getAccount().subscribe(data=>{
      this.allaccount=data
    })
  }

  getpinchange(ac:any,opin:any,npin:any,rpin:any){
    const dt=this.allaccount.filter((item:any)=>item.acno==ac && item.pin==opin)
    if(dt.length>0){
      var currentpin =parseInt(dt[0].pin)
      var oldpin=parseInt(opin)
      var repin=parseInt(rpin)
      if(currentpin==oldpin){
        let nepin=parseInt(npin)
        if(nepin==repin){
          this.msg=`pin updated succcesfully`
          let id = dt[0].id;
          let d = dt[0];
          d.pin=nepin

          this.obj.updateAccount(id, d).subscribe(() => {
          });

        }
        else{
          this.msg=`re-entered pin does not match with the new pin`

        }
  }
  else{
    this.msg= `Wrong pin Entered`
  }
    }
    else{
      this.msg=`Please enter valid acount details`
    }


  }
}
