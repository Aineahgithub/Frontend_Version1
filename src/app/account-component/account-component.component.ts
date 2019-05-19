import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-account-component',
  templateUrl: './account-component.component.html',
  styleUrls: ['./account-component.component.css']
})
export class AccountComponentComponent implements OnInit {

  constructor() { }
@Input()
myAccount:Account;
  ngOnInit() {
  }

}
