import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
export interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-money-transfe-form',
  templateUrl: './money-transfe-form.component.html',
  styleUrls: ['./money-transfe-form.component.css']
})
export class MoneyTransfeFormComponent implements OnInit {

  constructor() { }
  disableSelect = new FormControl(false);
  ngOnInit() {
  }
  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];
}
