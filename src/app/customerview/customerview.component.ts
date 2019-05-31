import { Component, OnInit } from '@angular/core';
import { Customer } from '../add-customer/Classes/Customer';
import { CustomerserviceService } from '../customerservice.service';
import { Account } from '../add-customer/Classes/Account';
import{Address}from  '../add-customer/Classes/Address';
import { AccountserviceService } from '../accountservice.service';
import { mergeMap } from 'rxjs/operators';
import { DataSource } from '@angular/cdk/table';
import { MatTableDataSource } from '@angular/material';
import { HttpBackend } from '@angular/common/http';

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
  id:number;
  
  type:string
  datasource :Customer [] = [];
  customer: Customer;
  listOfCustomers:Customer[]= [];
  listOfaddresses: Address []= []; 
  listOfAccounts = [];
  showAddCustomer = false;
  customers:Customer []= [];
  showCustomers :boolean = false;
  displayedColumns: string[] = ['id', 'firstName', 'lastName', 'age',
   'telephone','email', 'address', 'accounts', 'delete','edit'];
  dataSource = new MatTableDataSource(this.dataSource);
  constructor(private http1: CustomerserviceService,private http:AccountserviceService) { }
  ngOnInit() {
    this.http1.getCustomers().
    subscribe(data => this.dataSource = data);
    console.log(this.dataSource);
    error=>console.log(error);
  }
  getCustomers(){
    this.http1.getCustomers().
    subscribe(data => this.dataSource = data);
    console.log(this.dataSource);
    error=>console.log(error);
  
  }
getAccounts(){
  this.http.getAccounts().subscribe(ans=>this.listOfAccounts=ans);

}
getAddress(){
  this.http1.getAddress().subscribe(ans=>this.listOfaddresses=ans);
}

  showDetails() {
    this.showAddCustomer = !this.showAddCustomer;}


  applyFilter(filterValue: string) {
   this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  
  
}
