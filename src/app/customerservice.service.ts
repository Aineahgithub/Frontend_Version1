import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Customer } from './add-customer/Classes/Customer';

import { Observable } from 'rxjs';
import { Address } from './add-customer/Classes/Address';

@Injectable({
  providedIn: 'root'
})
export class CustomerserviceService {

  constructor(private http: HttpClient) { }
  postCustomer(customer: Customer): Observable<Customer> {
    return this.http.post<Customer>('http://localhost:1289/postCustomer', customer);
}

getCustomers(): Observable<Customer[]> {
  return this.http.get<Customer[]>('http://localhost:1289/getCustomers');
}
postAddress(address: Address): Observable<Address> {
  return this.http.post<Address>('http://localhost:1289/postAddress', address);
}

getAddress(): Observable<Address[]> {
return this.http.get<Address[]>('http://localhost:1289/getAddresses');
}
}
