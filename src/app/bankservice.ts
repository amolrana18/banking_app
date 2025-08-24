import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Bankservice {
  constructor(public obj: HttpClient) {}

  getAccount() {
    return this.obj.get("http://localhost:3000/account");
  }

  createAccount(account: any) {
    return this.obj.post("http://localhost:3000/account", account);
  }

  updateAccount(id: any, data: any) {
    return this.obj.put(`http://localhost:3000/account/${id}`, data);
  }
}
