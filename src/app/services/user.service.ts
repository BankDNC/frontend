import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserDTO, UserResponse } from '../models/user.model';

import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = `${environment.API_URL}/api/v1/user`;
  
  constructor(
    private http: HttpClient
  ) { }

  registerUser(dto: UserDTO) {
    return this.http.post<UserResponse>(`${this.apiUrl}/register`, dto);
  }
  
}
