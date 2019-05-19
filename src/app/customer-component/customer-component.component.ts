import { Component, OnInit, EventEmitter, Input } from '@angular/core';
import { Customer } from '../add-customer/Classes/Customer';

@Component({
  selector: 'app-customer-component',
  templateUrl: './customer-component.component.html',
  styleUrls: ['./customer-component.component.css']
})
export class CustomerComponentComponent implements OnInit {

  constructor() { }
  @Input()
myCustomer:Customer
  ngOnInit() {
  }

}
