import { Component, OnInit, Input } from '@angular/core';
import { AccountserviceService } from '../accountservice.service';
import { Account } from '../add-customer/Classes/Account';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-account-component',
  templateUrl: './account-component.component.html',
  styleUrls: ['./account-component.component.css']
})
export class AccountComponentComponent implements OnInit {
accounts : Account []= [];
  constructor(private http: AccountserviceService) {


   }
@Input()
myAccount:Account;
disableSelect = new FormControl(false);
  ngOnInit() {
  }
  getAccounts(){
   this.http.getAccounts().subscribe(ans=>this.accounts=ans);
  }

}
