import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Account } from '../add-customer/Classes/Account';
import { Customer } from '../add-customer/Classes/Customer';
import { ActivatedRoute, Router } from '@angular/router';
import { AccountserviceService } from '../accountservice.service';
import { mergeMap} from 'rxjs/operators'

@Component({
  selector: 'app-add-account',
  templateUrl: './add-account.component.html',
  styleUrls: ['./add-account.component.css']
})
export class AddAccountComponent implements OnInit {
  balance:number;
  age:number;
  amount:number;
  acountnr:number;
  firstName:string;
  lastname:string;
  customer: Customer;
  accountNr:string;
  accountList =[];
  accou: Account;
  id:number;
  @Output()
  accountsEmitter = new EventEmitter<Account>();

  constructor(private route: ActivatedRoute, private router:Router,private http:AccountserviceService) {
    this.http= http;
    //this.accou= new Account();
    route.params.subscribe(params=>{this.id=params['id'];
    console.log(this.id);
  }
    );
  }

  ngOnInit() {
  }
  

  addAccount(){
    var customer = new Customer();
    customer.age = this.age;
    customer.lastName = this.lastname;
    var account= new Account(this.amount,this.accountNr, this.amount);

    this.http.postAccount(account).pipe(
      mergeMap(_ => this.http.getAccounts())
    ).subscribe(ansfromServer => this.accountList = ansfromServer);

    console.log(account);
    alert(account.amount)
    this.accountsEmitter.emit(account);

  }
  
  onSubmit() {
    //this.http.postAccount(this.accou).subscribe(result => this.gotoAccountsList());
  }
 
  gotoAccountsList() {
    this.router.navigate(['/accounts']);
  }



}
