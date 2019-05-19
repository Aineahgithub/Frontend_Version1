import { Component, OnInit } from '@angular/core';
import { AccountserviceService } from '../accountservice.service';
import { Customer } from '../add-customer/Classes/Customer';
import { Account } from '../add-customer/Classes/Account';
import { mergeMap } from 'rxjs/operators';
import { Address } from '../add-customer/Classes/Address';

@Component({
  selector: 'app-account-overview',
  templateUrl: './account-overview.component.html',
  styleUrls: ['./account-overview.component.css']
})
export class AccountOverviewComponent implements OnInit {
  showAddAccount = false;
age:number;
amount:number;
balance:number;
accountnr:string;
lastName:string;
firstName:string;
address:Address;
customer:Customer;
  
  listOfAccounts = [];
  accounts= [];

  constructor(private http: AccountserviceService) { }

  ngOnInit() {
    this.http.getAccounts().subscribe(data=>{this.accounts=data;})
  }
  onAddAccount(account:Account){
    var customer = new Customer();
    customer.age = this.age;
    customer.lastName = this.lastName;
    customer.firstName= this.firstName;
    customer.address= this.address
    

    var customer1 = new Customer();
    customer.age = this.age;
    customer.lastName = this.lastName;
    var account = new Account(2988, "abbbbb", 78);
    account.setCustomer(customer);
    
    var account1 = new Account(this.balance, this.accountnr, this.amount);
    account1.setCustomer(customer1);
    this.listOfAccounts.push(account,account1);

    this.http.postAccounts(this.listOfAccounts).pipe(
      mergeMap(_ => this.http.getAccounts())
    ).subscribe(ansfromServer => this.listOfAccounts = ansfromServer);

    this.showAddAccount = false;
  }

  showAccountDetails() {
    this.showAddAccount = !this.showAddAccount;
  }
}
