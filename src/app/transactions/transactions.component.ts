import { Component, OnInit } from '@angular/core';
import { MoneyTransferServiceService } from '../money-transfer-service.service';
import { MoneyTransfer } from '../add-customer/Classes/MoneyTransfer';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css']
})
export class TransactionsComponent implements OnInit {
  listOfTransfers :MoneyTransfer[]= [];

  constructor( private transRest: MoneyTransferServiceService) { }

  ngOnInit() {
  }
  showTransactions(){
    this.transRest.getAllTransfers().subscribe(ans=>this.listOfTransfers=ans);
    console.log(this.listOfTransfers);
  }
}
