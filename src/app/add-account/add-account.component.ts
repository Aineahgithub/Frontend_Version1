import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Account } from '../add-customer/Classes/Account';
import { Customer } from '../add-customer/Classes/Customer';
import { ActivatedRoute, Router } from '@angular/router';
import { AccountserviceService } from '../accountservice.service';
import { mergeMap} from 'rxjs/operators'
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-account',
  templateUrl: './add-account.component.html',
  styleUrls: ['./add-account.component.css']
})
export class AddAccountComponent implements OnInit {
  balance:number=0;
  age:number;
  amount:number= 80;
  firstName:string;
  lastname:string;
  customer: Customer;
  accountnr:string= "";
  accountList =[];
  accou: Account;
  id:number;
  accountForm: FormGroup;
  @Output()
  accountsEmitter = new EventEmitter<Account>();

  constructor(private fb: FormBuilder,private route: ActivatedRoute, private router:Router,private http:AccountserviceService) {
    this.http= http;
    //this.accou= new Account();
    route.params.subscribe(params=>{this.id=params['id'];
    console.log(this.id);
    this.accountForm= fb.group({ accountnr:["", [Validators.required, Validators.minLength(18),
      Validators.maxLength(22)]],
    balance:[0, [Validators.required, Validators.min(1)]] ,
     amount:[89, [Validators.required, Validators.min(1)] ]});
  }
    );
  }

  ngOnInit() {
   
 }
 get f(){
   return this.accountForm.controls;
 }
  addAccount(){
    if(this.accountForm.invalid){
      return ;}
    var customer = new Customer();
    customer.age = this.age;
    customer.lastName = this.lastname;
    var account= new Account(this.balance, this.accountnr, this.amount);

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
 
  //gotoAccountsList() {
   // this.router.navigate(['/accounts']);
 // }



}
