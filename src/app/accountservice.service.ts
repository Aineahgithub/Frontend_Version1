import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Customer } from './add-customer/Classes/Customer';
import { Account } from './add-customer/Classes/Account';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountserviceService {

  constructor(private http: HttpClient) { }
  postAccount(account: Account): Observable<Account> {
    return this.http.post<Account>('http://localhost:1289/postAccount', account);
}
getAccounts(): Observable<Account[]> {
  return this.http.get<Account[]>('http://localhost:1289/getAccounts');
}
postAccounts(account : Account[]): Observable<Account> {
  return this.http.post<Account>('http://localhost:1289/postAccounts', account);
}
}