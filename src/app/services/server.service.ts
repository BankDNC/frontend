import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServerService {

  private apiUrl:string = '/api/status';

  constructor(
    private http: HttpClient
  ) { }

  statusServer() {
    let result = this.http.get(this.apiUrl);
    return result;
  }
}
