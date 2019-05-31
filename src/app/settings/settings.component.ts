import { Component, OnInit } from '@angular/core';
import { Customer } from '../add-customer/Classes/Customer';
import { CustomerserviceService } from '../customerservice.service';
import { Router } from '@angular/router';
import { AccountserviceService } from '../accountservice.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
customer : Customer;
account: Account;
id :number;

  constructor(private http: CustomerserviceService, 
    private router: Router, private http2: AccountserviceService) { }

  ngOnInit() {
  }
  deleteCustomer(){
    this.http.deleteCustomers(this.customer.customer_id).subscribe()
    console.log(`customer with Id = ${this.customer.customer_id}deleted`);
    (err:any)=> console.log(err);
    this.router.navigate(['customers']);
  }
  deleteAccount(){
  //this.http2.(this.id).subscribe()
  // console.log(`id with Id = ${this.account.id}deleted`);
   //(err:any)=> console.log(err);
  // this.router.navigate(['accounts']);
 
 }
  deleteAddress() {
    this.http.deleteAddress(this.id).subscribe()
   console.log(`address with Id = ${this.id}deleted`);
     (err:any)=> console.log(err);
    this.router.navigate(['customers']);

 // }
  }}
