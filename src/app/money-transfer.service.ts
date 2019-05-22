import { Injectable } from '@angular/core';
import { MoneyTransferServiceService } from './money-transfer-service.service';
import { AccountserviceService } from './accountservice.service';

@Injectable({
  providedIn: 'root'
})
export class MoneyTransferService {

  constructor(private http: MoneyTransferServiceService, private accountRest:AccountserviceService) { }
}
