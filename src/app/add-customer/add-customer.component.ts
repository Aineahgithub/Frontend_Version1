import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Customer } from './Classes/Customer';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerserviceService } from '../customerservice.service';
import { mergeMap } from 'rxjs/operators';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {

  customerForm: FormGroup;
 cust :Customer;
  firstName : string= "";
  lastName: string= ""
   account : Account ;
   email: string = "";
   telephone: string= ""
   listOfCustomers: Customer []= [];
name:string= ""
age:number= 0;
  @Output()
  customerEmitter = new EventEmitter<Customer>();

  constructor(private fb: FormBuilder ,private route: ActivatedRoute, private router:Router,private http:CustomerserviceService) {
    this.cust= new Customer();}
  ngOnInit() {
    this.customerForm= this.fb.group({ firstName:["", [Validators.required, Validators.minLength(3)]],
     lastName:["", [Validators.required, Validators.minLength(4)] ],
     age:[16, [Validators.required, Validators.min(16)] ],
     telephone:[1, [Validators.required, Validators.minLength(8),Validators.maxLength(14) ] ],
     email:["", [Validators.required, Validators.email]]});
  }
  get f(){
    return this.customerForm.controls;
  }
  addCustomer() {
    this.customerForm.get(this.firstName).value;
    this.customerForm.get(this.lastName).value;
    this.customerForm.get(this.telephone).value;
    this.customerForm.get(this.email);
   // var person = new Customer(this.firstName, this.lastName, this.age);
   // this.http.postCustomer(person).subscribe(result => this.gotoCustomersList())
   // console.log(person.firstName);
    //this.customerEmitter.emit(person);
    if(this.customerForm.invalid){
      return ;
    }
    var customer= new Customer(this.firstName, this.lastName, this.age);

    this.http.postCustomer(customer).pipe(
      mergeMap(_ => this.http.getCustomers())
    ).subscribe(ansfromServer => this.listOfCustomers = ansfromServer);
    alert(customer);
    console.log(customer);
   // this.addressEmitter.emit(address);

  }
  onSubmit() {
    this.http.postCustomer(this.cust).subscribe(result => this.gotoCustomersList());
  }
 
  gotoCustomersList() {
    this.router.navigate(['/customers']);
  }

}
