import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Address } from '../add-customer/Classes/Address';
import { mergeMap } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerserviceService } from '../customerservice.service';
import { FormGroup, FormBuilder,FormControl,FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-address',
  templateUrl: './add-address.component.html',
  styleUrls: ['./add-address.component.css']
})
export class AddAddressComponent implements OnInit {
    
  address1:Address;
  addressForm:FormGroup;
  
  constructor(private fb:FormBuilder, private route: ActivatedRoute, private router:Router,private http:CustomerserviceService) {
    this.address1= new Address("","","","");
   }
   
city:string= "";  zipCode:string="";
street:string ="";
country:string = "";
   listofAddress = [];

  @Output()
  addressEmitter = new EventEmitter<Address>();
  ngOnInit() {
    this.addressForm= this.fb.group({ street:["", [Validators.required, Validators.minLength(3)]],
     city:["", [Validators.required, Validators.minLength(4)] ],
     zipCode:["", [Validators.required, Validators.minLength(4)] ],
     country:["", [Validators.required, Validators.minLength(4)]]});

  }

  get f(){
    return this.addressForm.controls;
  }
  
  addAddress(){
    // if(! this.addressForm.invalid){
    //   return ;
    // }
    var address= new Address(this.street,
    this.city,
    this.zipCode, this.country);

    this.http.postAddress(address).pipe(
      mergeMap(_ => this.http.getAddress())
    ).subscribe(ansfromServer => this.listofAddress = ansfromServer);
    alert(address.street);
    console.log(address);
    this.addressEmitter.emit(address);

  }


  // onSubmit() {
  //   this.http.postAddress(this.address1).subscribe(result => this.gotoAddressList());
  // }
 
  // gotoAddressList() {
  //   this.router.navigate(['/addresses']);
  // }
}
