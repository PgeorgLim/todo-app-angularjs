import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  isLogin = false;

  loginUser() : Observable<Boolean>{
    // suppose we get data from a real database here and check for verification
      this.isLogin = true;

      //validation here. lets assume validation returns true
      return of(this.isLogin);
  }

  logoutUser() : Observable<Boolean>{
      //assuming logout was successful
      this.isLogin = false;
      return of(this.isLogin);
  }

  getUserState() : Observable<Boolean>{
    return of(this.isLogin);
  }

  constructor() { }
}
