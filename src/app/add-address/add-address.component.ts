import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Address } from '../add-customer/Classes/Address';
import { mergeMap } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerserviceService } from '../customerservice.service';
import { FormGroup, FormBuilder,FormControl,FormArray, Validators } from '@angular/forms';
import { Customer } from '../add-customer/Classes/Customer';

@Component({
  selector: 'app-add-address',
  templateUrl: './add-address.component.html',
  styleUrls: ['./add-address.component.css']
})
export class AddAddressComponent implements OnInit {
    
  address1:Address;
  addressForm:FormGroup;
  
  constructor(private fb:FormBuilder, private route: ActivatedRoute, private router:Router,private http:CustomerserviceService) {
  
   }
   
city:string= "";  zipCode:string="";
street:string ="";
country:string = "";
customer_id: number;
   listofAddress = [];

  @Output()
  addressEmitter = new EventEmitter<Address>();
  ngOnInit() {
    this.addressForm= this.fb.group({ street:["", [Validators.required, Validators.minLength(3)]],
     city:["", [Validators.required, Validators.minLength(4)] ],
     zipCode:["", [Validators.required, Validators.minLength(4)] ],
  
     country:["", [Validators.required, Validators.minLength(4)]],
     customer_id:["", [Validators.required, Validators.minLength(1)] ]});

  }

  get f(){
    return this.addressForm.controls;
  }
  
  addAddress(){
    var customer= new Customer()
     this.customer_id= customer.customer_id
    var address= new Address(this.street,
    this.city,
    this.zipCode, this.country);

    this.http.postAddress(address).pipe(
      mergeMap(_ => this.http.getAddress())
    ).subscribe(ansfromServer => this.listofAddress = ansfromServer);
    alert(address.street);
    console.log(address);
    this.addressEmitter.emit(address);
   this.router.navigate(['addcustomer'])
  }

}
