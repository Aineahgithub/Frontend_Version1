import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Customer } from './add-customer/Classes/Customer';
import { Account } from './add-customer/Classes/Account';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountserviceService {
  url = 'http://localhost:1289'
  constructor(private http: HttpClient) {
    
   }
  postAccount(account: Account): Observable<Account> {
    return this.http.post<Account>( this.url+'/postAccount', account);
}
getAccounts(): Observable<Account[]> {
  return this.http.get<Account[]>(this.url+'/getAccounts');
}
postAccounts(account : Account[]): Observable<Account> {
  return this.http.post<Account>( this.url+'/postAccounts', account);
}
updateAccount(account: Account): Observable<Account> {
  
  return this.http.put<Account>(this.url+'/updateAccount',account);
}

deleteAccount(id :number): Observable<void> {
return this.http.delete<void>(this.url +'/deleteAccount'+id);
}


}