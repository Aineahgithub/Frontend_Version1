import { BrowserModule } from '@angular/platform-browser';
import { NgModule,LOCALE_ID } from '@angular/core';
import { HttpClientModule }    from '@angular/common/http';
import {ReactiveFormsModule, FormsModule} from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccountOverviewComponent } from './account-overview/account-overview.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { AddAccountComponent } from './add-account/add-account.component';
import { CustomerviewComponent } from './customerview/customerview.component';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { AccountComponentComponent } from './account-component/account-component.component';
import { CustomerComponentComponent } from './customer-component/customer-component.component';
import { AddAddressComponent } from './add-address/add-address.component';
import { AddressComponentComponent } from './address-component/address-component.component';
import { AddressOverviewComponent } from './address-overview/address-overview.component';
import { NotFoundpageComponent } from './not-foundpage/not-foundpage.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import { from } from 'rxjs';

import { MaterialModule } from './material/material.module';
import { TableComponent } from './table/table.component';
import { MatTableModule,  MatButtonModule,
     MatMenuModule, MatSidenavModule,
     MatCardModule , MatCheckboxModule
    } from '@angular/material';
    import{MatInputModule} from '@angular/material/input';
  import {MatSelectModule} from '@angular/material/select'; 
import { HomeComponent } from './home/home.component';
import { MoneyTransfeFormComponent } from './money-transfe-form/money-transfe-form.component';
import { FormsComponent } from './forms/forms.component';
import { LoginComponent } from './login/login.component';
import { NavigationComponent } from './navigation/navigation.component';
import { SettingsComponent } from './settings/settings.component';

@NgModule({
  declarations: [
    AppComponent,
    AccountOverviewComponent,
    TransactionsComponent,
    AddAccountComponent,
    CustomerviewComponent,
    AddCustomerComponent,
    AccountComponentComponent,
    CustomerComponentComponent,
    AddAddressComponent,TableComponent,
    AddressComponentComponent,
    AddressOverviewComponent,
    NotFoundpageComponent,
    HomeComponent,
    MoneyTransfeFormComponent,
    FormsComponent,
    LoginComponent,
    NavigationComponent,
    SettingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    MatMenuModule,
    MatSidenavModule,
    MatCardModule, 
    HttpClientModule,
    MaterialModule,
    MatInputModule,
    FormsModule, MatSelectModule,
    ReactiveFormsModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,MatCheckboxModule,
    BrowserAnimationsModule

  ],
  providers: [{
    provide: LOCALE_ID,
    useValue: 'fr' // 'de' for Germany, 'fr' for France ...
   }],
  bootstrap: [AppComponent]
})
export class AppModule { }
