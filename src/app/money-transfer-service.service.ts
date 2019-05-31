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
updateLogin(log: Login): Observable<void> {
  return this.http.put<void>( this.url+'/login', log);
}
getAllLogins(): Observable<Login[]> {
return this.http.get<Login[]>( this.url +'/getLogins');
}
getLogins(username:string): Observable<Login> {
  return this.http.get<Login>( this.url +'/username');
  }
deleteTransfers(id:number): Observable<void> {
  return this.http.delete<void>(this.url+'/getTransfers'+id);
}
updateTransfer(transfer: MoneyTransfer): Observable<void> {

  return this.http.put<void>(this.url +'/transferMoney', transfer);
}
}
