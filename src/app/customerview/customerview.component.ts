import { Component, OnInit } from '@angular/core';
import { Customer } from '../add-customer/Classes/Customer';
import { CustomerserviceService } from '../customerservice.service';
import { Account } from '../add-customer/Classes/Account';
import { AccountserviceService } from '../accountservice.service';
import { mergeMap } from 'rxjs/operators';
import { DataSource } from '@angular/cdk/table';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-customerview',
  templateUrl: './customerview.component.html',
  styleUrls: ['./customerview.component.css']
})
export class CustomerviewComponent implements OnInit {
  age: number=0;
  firstName: string= "";
  lastName: string= "";
  account:Account;
  accountnr:string;
  amount:number
  
  listOfCustomers : Customer[]  = [new Customer("Game on",
  "Barasa",6,"2312222222222","ebara@yha.de"), new Customer("edwin",
  "jeck",98,"2312222222222","ebara@yha.de")];
  listOfAccounts = [];
  showAddCustomer = false;
  customers:Customer []= [];

  constructor(private http1: CustomerserviceService,private http:AccountserviceService) { }

  ngOnInit() {
this.http1.getCustomers().subscribe(ans=>this.customers= ans);

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
    this.showAddCustomer = !this.showAddCustomer;}

  displayedColumns: string[] = ['id', 'firstName', 'lastName', 'age',
   'telephone','email', 'address', 'accounts'];
  datasource = new MatTableDataSource(this.customers);
  //DataSource= this.listOfCustomers;
  applyFilter(filterValue: string) {
    this.datasource.filter = filterValue.trim().toLowerCase();
  }
  

}
