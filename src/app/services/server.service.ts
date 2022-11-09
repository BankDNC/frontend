import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServerService {

  private apiUrl:string = `${environment.API_URL}/api/status`;

  constructor(
    private http: HttpClient
  ) { }

  statusServer() {
    let result = this.http.get(this.apiUrl);
    return result;
  }
}
