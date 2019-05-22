import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Customer } from './Classes/Customer';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerserviceService } from '../customerservice.service';
import { mergeMap } from 'rxjs/operators';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {

  customerForm: FormGroup;
 cust :Customer;
  firstName : string= "Edwin";
  lastName: string ="Aineah";
   account : Account []=[] ;
   email: string ="emm@yahoo.de";
   telephone: string ="01111199999";
   listOfCustomers: Customer []= [];
name:string= "";
age:number= 16;
  @Output()
  customerEmitter = new EventEmitter<Customer>();
  id: number;

  constructor(private fb: FormBuilder ,private route: ActivatedRoute, private router:Router,private http:CustomerserviceService) {
    this.customerForm=fb.group({ firstName:["", [Validators.required, Validators.minLength(3)]],
    lastName:["", [Validators.required, Validators.minLength(4)] ],
    age:[16, [Validators.required, Validators.min(16)] ],
    telephone:["", [Validators.required, Validators.maxLength(14) ] ],
    email:["", [Validators.required, Validators.email]]});
 }
  
  ngOnInit() {
  }
  get f(){
    return this.customerForm.controls;
  }
  addCustomer() {
   // this.customerForm.get(this.firstName).value;
   // this.customerForm.get(this.lastName).value;
    //his.customerForm.get(this.telephone).value;
   // this.customerForm.get(this.email).value;
   // var person = new Customer(this.firstName, this.lastName, this.age);
   // this.http.postCustomer(person).subscribe(result => this.gotoCustomersList())
   // console.log(person.firstName);
    //this.customerEmitter.emit(person);
    //if(this.customerForm.invalid){
     // return ;
   // }
    debugger;
     var customer= new Customer(this.firstName, this.lastName,
   this.age, this.telephone ,this.email);
      

    this.http.postCustomer(customer).pipe(
      mergeMap(_ => this.http.getCustomers())
    ).subscribe(ansfromServer => this.listOfCustomers = ansfromServer);
    alert(customer.firstName);
    console.log(customer);
   // this.addressEmitter.emit(address);

  }
  //displayedColumns: string[] = ['id', 'firstName', 'lastName', 'age',
   //'telephone','email', 'address', 'accounts'];
  //dataSource = new MatTableDataSource(this.listOfCustomers);

  //pplyFilter(filterValue: string) {
    //this.dataSource.filter = filterValue.trim().toLowerCase();
  //}
  onSubmit() {
    this.http.postCustomer(this.cust).subscribe(result => this.gotoCustomersList());
  }
 
  gotoCustomersList() {
    this.router.navigate(['/customers']);
  }

}
