import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Customer } from './add-customer/Classes/Customer';

import { Observable } from 'rxjs';
import { Address } from './add-customer/Classes/Address';


@Injectable({
  providedIn: 'root'
})
export class CustomerserviceService {
 url='http://localhost:1289';
  constructor(private http: HttpClient) {
    //const urL = 'http://localhost:1289';
    //http://localhost:1289/postCustomer';
   }
  postCustomer(customer: Customer): Observable<Customer> {
    return this.http.post<Customer>(this.url +'/postCustomer', customer);
}

deleteCustomers(id:number): Observable<Customer[]> {
  return this.http.delete<Customer[]>(this.url+'/deleteCustomer'+id);
}
updateCustomer(customer: Customer): Observable<void> {
  return this.http.put<void>(this.url+'updateCustomer', customer);
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
updateAddress(address: Address): Observable<Address> {
  
  return this.http.put<Address>(this.url+'/updateAddress', address);
}

deleteAddress(id :number): Observable<void> {
return this.http.delete<void>(this.url +'/deleteAddress'+id);
}
getAcustomer(id:number):Observable<Customer> {
  return this.http.get<Customer>(this.url+'/'+ id);

}
}
