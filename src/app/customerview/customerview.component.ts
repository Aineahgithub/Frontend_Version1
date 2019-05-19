import { Component, OnInit } from '@angular/core';
import { Customer } from '../add-customer/Classes/Customer';
import { CustomerserviceService } from '../customerservice.service';
import { Account } from '../add-customer/Classes/Account';
import { AccountserviceService } from '../accountservice.service';
import { mergeMap } from 'rxjs/operators';

@Component({
  selector: 'app-customerview',
  templateUrl: './customerview.component.html',
  styleUrls: ['./customerview.component.css']
})
export class CustomerviewComponent implements OnInit {
  age: number;
  firstName: string;
  lastName: string;
  account:Account;
  accountnr:string;
  amount:number
  listOfCustomers = [];
  listOfAccounts = [];
  showAddCustomer = false;

  constructor(private http1: CustomerserviceService,private http:AccountserviceService) { }

  ngOnInit() {
  }

  onAddCustomer(customer:Customer) {
    this.showAddCustomer;
    customer = new Customer();
    customer.age = this.age;
    customer.lastName = this.lastName;

    var customer1 = new Customer();
    customer.age = this.age;
    customer.lastName = this.lastName;
    this.account = new Account(2988, this.accountnr, this.amount);
    
    this.listOfCustomers.push(customer);

    var account1 = new Account(2988, "78");
    account1.setCustomer(customer1);
    this.listOfAccounts = [{account1 }];

    this.http1.postCustomer(customer).pipe(
      mergeMap(_ => this.http1.getCustomers())
    ).subscribe(ansfromServer => this.listOfCustomers = ansfromServer);
    this.http.postAccounts(this.listOfAccounts).pipe(
      mergeMap(_ => this.http.getAccounts())
    ).subscribe(ansfromServer => this.listOfAccounts = ansfromServer);


  }

  showDetails() {
    this.showAddCustomer = !this.showAddCustomer;
  }

}
