import { Component, OnInit } from '@angular/core';
import { ErrorStateMatcher } from '@angular/material';
import { FormGroupDirective, FormControl, NgForm, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { routerNgProbeToken } from '@angular/router/src/router_module';
import { MoneyTransferService } from '../money-transfer.service';
import { MoneyTransferServiceService } from '../money-transfer-service.service';
import { Login } from '../add-customer/Classes/Login';
import { LoginserviceService } from '../loginservice.service';
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }}
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username:string= "";
  passwort:string= "";
  logout:boolean= false;
  message:string= "";
  credentials={username:'',password:''}

  loginForm: FormGroup;
  constructor(private log:LoginserviceService, private fb:FormBuilder, 
    private router:Router, 
    private httplog:MoneyTransferServiceService) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(3)]],
      passwort: ['', [Validators.required,Validators.maxLength(5)]]
  });
  }
  Login(){
    var log =new Login(this.username, this.passwort);
    this.httplog.Login(log).subscribe();

  }



  onSubmit() {
    //var login= new Login(this.username,this.passwort)
    //this.log.authenticate(login);

    var log =new Login(this.username, this.passwort);
    this.httplog.Login(log).subscribe();
    this.router.navigate[('accounts')]
   // this.logout=!this.logout
    //this.message="error :  Username or password is incorrect";
   
  }
  onLogout(){

    this.router.navigate[('/home')]
    this.logout=true;
  }

}
