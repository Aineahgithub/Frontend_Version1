import { Component, OnInit, Input } from '@angular/core';
import { Address } from '../add-customer/Classes/Address';
@Component({
  selector: 'app-address-component',
  templateUrl: './address-component.component.html',
  styleUrls: ['./address-component.component.css']
})
export class AddressComponentComponent implements OnInit {

  constructor() { }
  @Input()
  myAddress:Address;
  ngOnInit() {
  }

}
