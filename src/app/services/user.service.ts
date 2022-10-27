import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  registerUser() {
    console.log('registerUser');
  }
}
