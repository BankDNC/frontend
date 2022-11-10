import { Injectable } from '@angular/core';
import jwt_decode from 'jwt-decode';

interface MyToken {
  sub: string;
  exp: number;
}

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }

  saveToken(token: string) {
    localStorage.setItem('token', token);
  }

  getToken() {
    const token = localStorage.getItem('token');
    return token;
  }

  validToken() {
    const token = this.getToken();
    if (token) {
      const payload: MyToken = jwt_decode(token);
      return payload.exp > Date.now() / 1000;
    }
    return false;

  }
}
