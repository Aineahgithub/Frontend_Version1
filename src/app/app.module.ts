import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injectable } from '@angular/core';
import { HttpClientModule, HttpInterceptor, HttpRequest, HttpHandler, HTTP_INTERCEPTORS }    from '@angular/common/http';
import {ReactiveFormsModule, FormsModule} from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatStepperModule} from '@angular/material/stepper';
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
import { LoginserviceService } from './loginservice.service';
import { UpdateComponent } from './update/update.component';
import { AboutComponent } from './about/about.component';
@Injectable()
export class XhrInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const xhr = req.clone({
      headers: req.headers.set('X-Requested-With', 'XMLHttpRequest')
    });
    return next.handle(xhr);
  }
}
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
    SettingsComponent,
    UpdateComponent,
    AboutComponent
    
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
    MatButtonModule,MatStepperModule,
    MatIconModule,MatCheckboxModule,
    BrowserAnimationsModule

  ],
  providers: [LoginserviceService,{provide: HTTP_INTERCEPTORS, 
    useClass: XhrInterceptor, multi: true }
   ],
  bootstrap: [AppComponent]
})
export class AppModule { }
