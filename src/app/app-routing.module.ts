import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerviewComponent } from './customerview/customerview.component';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { AccountOverviewComponent } from './account-overview/account-overview.component';
import { AddAccountComponent } from './add-account/add-account.component';
import { AddAddressComponent } from './add-address/add-address.component';
import { AddressOverviewComponent } from './address-overview/address-overview.component';
import { NotFoundpageComponent } from './not-foundpage/not-foundpage.component';
import { HomeComponent } from './home/home.component';
import { MoneyTransfeFormComponent } from './money-transfe-form/money-transfe-form.component';
import { AccountComponentComponent } from './account-component/account-component.component';
import { SettingsComponent } from './settings/settings.component';
import { LoginComponent } from './login/login.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { UpdateComponent } from './update/update.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [{ path: 'customers', component: CustomerviewComponent },
{ path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
{ path: 'addcustomer', component: AddCustomerComponent }, 
{path: 'accounts', component: AccountOverviewComponent },
{ path: 'addaccount', component: AddAccountComponent },
{ path: 'add-address', component: AddAddressComponent },
{ path: 'account', component: AccountComponentComponent },
{ path: 'account/:id', component: AccountComponentComponent },
{path: 'money-transfe-form', component:MoneyTransfeFormComponent},
{path: 'customer/:id', component:MoneyTransfeFormComponent},
{ path: 'addresses', component: AddressOverviewComponent },
{ path: 'settings', component: SettingsComponent },
{ path: 'login', component: LoginComponent },
{ path: 'transactions', component: TransactionsComponent },
{ path: 'home', component: HomeComponent },{
path: 'not-foundpage', component: NotFoundpageComponent },
{path: 'update', component: UpdateComponent},
{path: 'about', component: AboutComponent},
{ path: '**',
    redirectTo: '/not-foundpage',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
