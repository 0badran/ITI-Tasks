import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {
  isLogedStatus: BehaviorSubject<boolean>;
  userStatus: BehaviorSubject<string | null>;
  constructor() {
    this.isLogedStatus = new BehaviorSubject<boolean>(this.isLogIn());
    this.userStatus = new BehaviorSubject<string | null>(null);
  }
  logIn(_email: string, _password: string) {
    localStorage.setItem("token", _email);
    this.isLogedStatus.next(true);
    this.userStatus.next(localStorage.getItem("token"));
  }
  logOut() {
    localStorage.removeItem("token");
    this.isLogedStatus.next(false);

  }

  isLogIn(): boolean {
    return localStorage.getItem("token") ? true : false;
  }

  getUser(): BehaviorSubject<string | null> {
    return this.userStatus;
  }
}

