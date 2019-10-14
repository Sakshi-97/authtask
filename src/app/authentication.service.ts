import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
// import { HttpClient, Headers } from '@angular/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';


@Injectable({ providedIn: 'root' })
export class AuthenticationService {
  
  constructor(private http: HttpClient,private router: Router) {
    }

   login(email: string, password: string) {
     console.log("email", email);
     console.log("password", password);
    return this.http.post<any>(`http://18.223.254.168:3000/api/users/login`, { emailAddress: email, password })
    .pipe(map(res => {
      
      let userData= res.user;
      // store user details and basic auth credentials in local storage to keep user logged in between page refreshes
      res.authdata = window.btoa(email + ':' + password);
      localStorage.setItem('currentUser', JSON.stringify(userData));
      localStorage.setItem('token', res.token);      
      console.log("local")      
       return userData;
      
    }));
       
  }

  logout() {
    localStorage.removeItem('currentUser');
    this.router.navigate(['/admin/login']);
    // localStorage.clear();
  }
}