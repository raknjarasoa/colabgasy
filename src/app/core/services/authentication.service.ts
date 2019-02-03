import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

interface IToken {
  refresh_token: string;
  exp: Date;
  access_token: {
    username: string;
    roles: string[];
  };
}

@Injectable()
export class AuthenticationService {
  token: IToken = {
    refresh_token: 'refreshtokencode',
    exp: new Date(new Date().getDate() + 1),
    access_token: {
      username: 'user',
      roles: ['Admin', 'RegisteredUser', 'Super User']
    }
  };

  tokenKey = 'a6smm_utoken';

  constructor(private router: Router) {}

  login(username: string, password: string) {
    // TODO Njarasoa
    this.setToken(this.token);
    this.router.navigate(['admin', 'dashboard']);
  }

  logout() {
    this.removeToken();
    this.router.navigate(['login']);
  }

  getToken() {
    return JSON.parse(localStorage.getItem(this.tokenKey));
  }

  setToken(token: IToken) {
    localStorage.setItem(this.tokenKey, JSON.stringify(token));
  }

  getAccessToken() {
    return JSON.parse(localStorage.getItem(this.tokenKey))['access_token'];
  }

  isAuthenticated() {
    const token = localStorage.getItem(this.tokenKey);

    if (token) {
      return true;
    } else {
      return false;
    }
  }

  refreshToken() {
    this.token.exp = new Date(new Date().getDate() + 1);
    this.setToken(this.token);
  }

  removeToken() {
    localStorage.removeItem(this.tokenKey);
  }
}
