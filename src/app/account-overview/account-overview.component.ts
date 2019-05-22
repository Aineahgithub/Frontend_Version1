import { Component, OnInit } from '@angular/core';
import { AccountserviceService } from '../accountservice.service';
import { Customer } from '../add-customer/Classes/Customer';
import { Account } from '../add-customer/Classes/Account';
import { mergeMap } from 'rxjs/operators';
import { Address } from '../add-customer/Classes/Address';
import { MatTableDataSource } from '@angular/material';
import { DataSource } from '@angular/cdk/table';
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
datasource = [];
displayedColumns :string []= ['id', 'date', 'balance','accountNr',
   'amount','deposit', 'withdraw'];
  
  listOfAccounts = [];
  accounts= [];

  constructor(private http: AccountserviceService) { }

  ngOnInit() {
    this.http.getAccounts().subscribe(data=>{this.accounts=data;})
  }
  showAccount(){
    this.http.getAccounts().subscribe(data =>this.datasource = data);
    console.log(this.datasource);
  }

  showAccountDetails() {
    this.showAddAccount = !this.showAddAccount;
  }
  
   //dataSource= new DataSource(this.accounts)
  //dataSource = new MatTableDataSource(this.accounts);
  //DataSource= this.listOfCustomers;
  applyFilter(filterValue: string) {
    //this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
