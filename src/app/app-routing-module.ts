import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home } from './home/home';
import { About } from './about/about';
import { AccountSummarry } from './account-summarry/account-summarry';
import { BalanceEnquiry } from './balance-enquiry/balance-enquiry';
import { Contact } from './contact/contact';
import { Deposit } from './deposit/deposit';
import { FundTransfer } from './fund-transfer/fund-transfer';
import { PinChange } from './pin-change/pin-change';
import { Withdraw } from './withdraw/withdraw';
import { CreateAccount } from './create-account/create-account';

const routes: Routes = [
  {
    path:"",
    component:Home
  },
  {
    path:"about",
    component:About
  },
  {
    path:"account-summary",
    component:AccountSummarry
  },
  {
    path:"balance-enquiry",
    component:BalanceEnquiry
  },
  {
    path:"contact",
    component:Contact
  },
  {
    path:"create-account",
    component:CreateAccount
  },
  {
    path:"contact",
    component:Contact
  },
  {
    path:"deposit",
    component:Deposit
  },
  {
    path:"fund-transfer",
    component:FundTransfer
  },
  {
    path:"pin-change",
    component:PinChange
  },
  {
    path:"withdraw",
    component:Withdraw
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
