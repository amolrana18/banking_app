import { NgModule, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Home } from './home/home';
import { About } from './about/about';
import { Contact } from './contact/contact';
import { Withdraw } from './withdraw/withdraw';
import { Deposit } from './deposit/deposit';
import { FundTransfer } from './fund-transfer/fund-transfer';
import { BalanceEnquiry } from './balance-enquiry/balance-enquiry';
import { PinChange } from './pin-change/pin-change';
import { AccountSummarry } from './account-summarry/account-summarry';
import { CreateAccount } from './create-account/create-account';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    App,
    Home,
    About,
    Contact,
    Withdraw,
    Deposit,
    FundTransfer,
    BalanceEnquiry,
    PinChange,
    AccountSummarry,
    CreateAccount
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection()
  ],
  bootstrap: [App]
})
export class AppModule { }
