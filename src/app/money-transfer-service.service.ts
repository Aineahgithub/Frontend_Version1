import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MoneyTransfer } from './add-customer/Classes/MoneyTransfer';
import { Login } from './add-customer/Classes/Login';
import { MoneyTransferService } from './money-transfer.service';
import { TransferState } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class MoneyTransferServiceService {


    accountNrto: number;
    accountNrfrom: number;
    amount : number;
    transfers: MoneyTransfer;
     url:string ='http://localhost:1289/OnlineBanking';

  constructor(private http:HttpClient) {}
   sendMoney(transfer: MoneyTransfer): Observable<MoneyTransfer> {

    return this.http.post<MoneyTransfer>(this.url +'/transferMoney', transfer);
}
getAllTransfers(): Observable<MoneyTransfer[]> {
  return this.http.get<MoneyTransfer[]>(this.url+'/getTransfers');
}
Login(log: Login): Observable<Login> {
  return this.http.post<Login>( this.url+'/login', log);
}
getAllLogins(): Observable<Login[]> {
return this.http.get<Login[]>( this.url +'/getLogins');


}
}
