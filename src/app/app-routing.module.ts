import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerviewComponent } from './customerview/customerview.component';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { AccountOverviewComponent } from './account-overview/account-overview.component';
import { AddAccountComponent } from './add-account/add-account.component';
import { AddAddressComponent } from './add-address/add-address.component';
import { AddressOverviewComponent } from './address-overview/address-overview.component';
import { NotFoundpageComponent } from './not-foundpage/not-foundpage.component';

const routes: Routes = [{ path: 'customers', component: CustomerviewComponent },
{ path: 'addcustomer', component: AddCustomerComponent }, {path: 'accounts', component: AccountOverviewComponent },
{ path: 'addaccount/:id', component: AddAccountComponent },{ path: 'addaddress', component: AddAddressComponent },
{ path: 'addresses', component: AddressOverviewComponent },
{ path: 'addresses/:id', component: AddressOverviewComponent },
{ path: 'addaccount', component: AddAccountComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
