import { Component, OnInit } from '@angular/core';
import { Account } from '../add-customer/Classes/Account';
import { Customer } from '../add-customer/Classes/Customer';
import { Router, ActivatedRoute } from '@angular/router';
import { AccountserviceService } from '../accountservice.service';
import { CustomerserviceService } from '../customerservice.service';
@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  listOfAccounts:Account [] =[];
  listOfCustomers:Customer []= [];
  id:number;
  account:Account;
  customer:Customer;
  balance:number;
  type:string;
  data;
  accountnr: string;
  customer_id: number;
  constructor(private router:Router, 
    private http2 :CustomerserviceService,
    private http:AccountserviceService,
    private route:ActivatedRoute) { 

    }

  ngOnInit() {
    this.route.params.subscribe(
      params => {
        this.id = params['id'];
        console.log(this.id);});
        this.http.getAccounts().subscribe(ans=>this.listOfAccounts);
          for(var i=0; i<this.listOfAccounts.length;i++){
            if(this.listOfAccounts[i].id===this.id)
            this.data=this.listOfAccounts[i];
            break;

          }
        }
        
    updateAccount(){
      var account = new Account(this.balance, this.accountnr, this.type,
        this.customer_id);
      this.http.updateAccount(account).subscribe();
      this.router.navigate(['customers']);

    }
  deleteAccount(){
    if (confirm("Are your sure you want to delete this Account?")){
    this.http.deleteAccount(this.id).subscribe();
    this.router.navigate(['customers']);
  }
  }
}
