import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators, FormGroupDirective, NgForm } from '@angular/forms';
import { AccountserviceService } from '../accountservice.service';
import { HttpBackend } from '@angular/common/http';
import { Account } from '../add-customer/Classes/Account';
import { ErrorStateMatcher } from '@angular/material';
import { MoneyTransferServiceService } from '../money-transfer-service.service';
import { MoneyTransfer } from '../add-customer/Classes/MoneyTransfer';
import { ContentObserver } from '@angular/cdk/observers';
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
@Component({
  selector: 'app-money-transfe-form',
  templateUrl: './money-transfe-form.component.html',
  styleUrls: ['./money-transfe-form.component.css']
})
export class MoneyTransfeFormComponent implements OnInit {
toAccountId:number=4;
fromAccountId:number=3;
amount: number=100;
date :Date = new Date();

message:string = ""
listOfAccounts: Account []= [];
transferForm: MoneyTransfer;
ibans: number []= [];

moneyForm: FormGroup
  constructor(private fb: FormBuilder, private http : AccountserviceService, 
    private transRest:MoneyTransferServiceService ) {
     this.http.getAccounts().subscribe(ans =>this.listOfAccounts= ans);
     console.log(this.listOfAccounts);

    }

  disableSelect = new FormControl(false);
  ngOnInit() { this.moneyForm= this.fb.group({ accountNrto:["", [Validators.required, Validators.minLength(18),
    Validators.maxLength(22)]],accountNrfrom:["", [Validators.required, Validators.minLength(18),
      Validators.maxLength(22)]],
  amount:[0, [Validators.required, Validators.min(1)] ]});
}
get f(){
 return this.moneyForm.controls;

}
getAccounts(){
  this.http.getAccounts().subscribe(ans =>this.listOfAccounts= ans);
  console.log(this.listOfAccounts)
  
}

Send(){
    //if(this.moneyForm.invalid){
      //return ;}
      this.transferForm= new MoneyTransfer(this.toAccountId, this.fromAccountId,this.amount, this.message,this.date);
      this.transRest.sendMoney(this.transferForm).subscribe();
      alert(this.transferForm.fromAccountId)
      console.log(this.transferForm);

      


    }
    selected = new FormControl('valid', [
      Validators.required,
      Validators.pattern('valid'),
    ]);
  
    selectFormControl = new FormControl('valid', [
      Validators.required,
      Validators.pattern('valid'),
    ]);
  
    nativeSelectFormControl = new FormControl('valid', [
      Validators.required,
      Validators.pattern('valid'),
    ]);
  
    matcher = new MyErrorStateMatcher();
}
