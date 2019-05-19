import { Component, OnInit } from '@angular/core';
import { Address } from '../add-customer/Classes/Address';
import { CustomerserviceService } from '../customerservice.service';
import { mergeMap } from 'rxjs/operators';

@Component({
  selector: 'app-address-overview',
  templateUrl: './address-overview.component.html',
  styleUrls: ['./address-overview.component.css']
})
export class AddressOverviewComponent implements OnInit {
  city: string = '';
  street:string= '';
  zipcode:string='';
  country:string= '';
  listOfAddress= [];
  showAddress: boolean= false;

  constructor(private http: CustomerserviceService) { }

  ngOnInit() {}
  

  onAddAddress(address:Address){
    
    this.listOfAddress.push(address);

    this.http.postAddress(address).pipe(
      mergeMap(_ => this.http.getAddress())
    ).subscribe(ansfromServer => this.listOfAddress = ansfromServer);

    this.showAddress = false;
  }

  showAddressDetails() {
    this.showAddress = !this.showAddress;
  }
}


