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
      username: '',
      roles: []
    }
  };

  TOKEN_KEY = 'colab_gasy_utoken';

  constructor(private router: Router) {}

  login(username: string, password: string) {
    this.token.access_token = {
      roles: ['Admin', 'RegisteredUser', 'Super User'],
      username
    };

    this.setToken(this.token);
    this.router.navigate(['admin', 'dashboard']);
  }

  logout() {
    this.removeToken();
    this.router.navigate(['login']);
  }

  getToken(): IToken {
    return JSON.parse(localStorage.getItem(this.TOKEN_KEY));
  }

  setToken(token: IToken) {
    localStorage.setItem(this.TOKEN_KEY, JSON.stringify(token));
  }

  getAccessToken(): any {
    if (this.getToken()) {
      return this.getToken().access_token;
    } else {
      return null;
    }
  }

  isAuthenticated() {
    const token = localStorage.getItem(this.TOKEN_KEY);

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
    localStorage.removeItem(this.TOKEN_KEY);
  }
}
