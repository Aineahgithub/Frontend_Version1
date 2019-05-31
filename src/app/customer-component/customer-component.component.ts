import { Component, OnInit, EventEmitter, Input } from '@angular/core';
import { Customer } from '../add-customer/Classes/Customer';
import { CustomerserviceService } from '../customerservice.service';
import { Route } from '@angular/compiler/src/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AccountserviceService } from '../accountservice.service';

@Component({
  selector: 'app-customer-component',
  templateUrl: './customer-component.component.html',
  styleUrls: ['./customer-component.component.css']
})
export class CustomerComponentComponent implements OnInit {
  customer :Customer;
  listOfCustomers  : Customer[];
  id:number;
  data;
  constructor(private http: CustomerserviceService, 
    private http2:AccountserviceService, 
    private router:Router,private  route:ActivatedRoute) { }
  @Input()
myCustomer:Customer
  ngOnInit() {
    this.route.params.subscribe(
      params => {
        this.id = params['id'];
        console.log(this.id);});
        this.http.getCustomers().subscribe(ans=>this.listOfCustomers);
          for(var i=0; i<this.listOfCustomers.length;i++){
            if(this.listOfCustomers[i].customer_id===this.id)
            this.data=this.listOfCustomers[i];
            break;

          }
  }

  deleteCustomer(){
    this.http.deleteCustomers(this.customer.customer_id).subscribe()
    console.log(`customer with Id = ${this.customer.customer_id}deleted`);
    (err:any)=> console.log(err);
    this.router.navigate(['customers']);
  }

}
