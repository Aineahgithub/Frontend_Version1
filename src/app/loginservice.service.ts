import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Login } from './add-customer/Classes/Login';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginserviceService {
  authenticated = false;
  constructor(private http: HttpClient, private router: Router) { }

  authenticate(credentials: Login): void {
    const url: string = 'http://localhost:1289/login'
    /*
    const headers = new HttpHeaders(credentials ? {
      authorization: 'Basic ' + btoa(credentials.userName + ':' + credentials.passwort)
    } : {});
    */

    this.http.post(url, credentials).subscribe(response => {
      this.authenticated = true;
      console.log("Valid Credentials");
    });
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.authenticated) {
      // logged in so return true
      return true;
    }

    // not logged in so redirect to login page with the return url
    this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
    return false;


  }

}