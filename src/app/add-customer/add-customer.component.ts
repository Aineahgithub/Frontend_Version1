import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Customer } from './Classes/Customer';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerserviceService } from '../customerservice.service';
import { mergeMap } from 'rxjs/operators';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { MatTableDataSource } from '@angular/material';
import { Address } from './Classes/Address';
import { Login } from './Classes/Login';
import { Account } from './Classes/Account';
import { MoneyTransferServiceService } from '../money-transfer-service.service';
import { HttpBackend } from '@angular/common/http';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {
signup:boolean = true;
  customerForm: FormGroup;
 cust :Customer;
  addressForm: FormGroup;
  loginForm:FormGroup;
  firstName : string= "Edwin";
  lastName: string ="Aineah";
   account : Account []=[] ;
   email: string ="emm@yahoo.de";
   telephone: string ="01111199999";
   street: string="";
   city:string= ""
   country:string=""
   zipCode:string=""
   customer_id: number;
   username:string="";
   passwort:string="";
   login:Login;
   address:Address
   log:Login;
   adress:Address
   addresses: Address[]= [];
   
  
    customer:Customer;
   listOfCustomers: Customer []= [];

name:string= "";
age:number= 16;
  @Output()
  customerEmitter = new EventEmitter<Customer>();
  id: number;

  constructor(private fb: FormBuilder ,private route: ActivatedRoute, private router:Router,
    private http:CustomerserviceService, private http1:MoneyTransferServiceService) {
    this.customerForm=fb.group({ firstName:["", [Validators.required, Validators.minLength(3)]],
    lastName:["", [Validators.required, Validators.minLength(4)] ],
    age:[16, [Validators.required, Validators.min(16)] ],
    telephone:["", [Validators.required, Validators.maxLength(14) ] ],
    email:["", [Validators.required, Validators.email]]});
 }
  
  ngOnInit() {
    this.customerForm = this.fb.group({ firstName:["", [Validators.required, Validators.minLength(3)]],
  lastName:["", [Validators.required, Validators.minLength(4)] ],
  age:[16, [Validators.required, Validators.min(16)] ],
  telephone:["", [Validators.required, Validators.maxLength(14) ] ],
  email:["", [Validators.required, Validators.email]]});
  this.addressForm= this.fb.group({ street:["", [Validators.required, Validators.minLength(3)]],
     city:["", [Validators.required, Validators.minLength(4)] ],
     zipCode:["", [Validators.required, Validators.minLength(4)] ],
     country:["", [Validators.required, Validators.minLength(4)]]});
     this.loginForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(3)]],
      passwort: ['', [Validators.required,Validators.maxLength(5)]]
  });
  }
  get f(){
    return this.customerForm.controls;
  }
  signUp() {
    debugger;
    var log= new Login(this.loginForm.get(this.username).value,this.loginForm.get(this.passwort).value);
    this.http1.Login(log).subscribe(ans=>this.login=ans);
    var adress=new Address(this.addressForm.get(this.street).value,
     this.addressForm.get(this.city).value,this.addressForm.get(this.zipCode).value, this.addressForm.get(this.country).value);
    this.http.postAddress(adress).subscribe(ans=>{
      return this.address = ans;
    })
    this.http.getAddress().subscribe(ans=>this.addresses=ans);
    
     this. customer= new Customer(this.firstName, this.lastName,
   this.age, this.telephone ,this.email, adress,log);
   if(this.customer.customer_id==null){
    this.http.postCustomer(this.customer).subscribe();
    this.router.navigate(['home']);
    alert('Thank you for signing up, proceed to home login');
    console.error();
    console.log(this.customer.age);
    this.router.navigate(['login']);}
    else {
      this.http.updateCustomer(this.customer).subscribe()
       { this.router.navigate(['account']);}

  } 
  
  
      
    }
    addCustomer(){
      this.http.postCustomer(this.customer).subscribe();
    }
 
  }
  


