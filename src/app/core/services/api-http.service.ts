import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()

export class ApiHttpService {

  constructor(
    private http: HttpClient
  ) {
  }

  get(url: string, options?: any): Observable<any> {
    return this.http.get(url, options);
  }

  post(url: string, data: any, options?: any): Observable<any> {
    return this.http.post(url, data, options);
  }

  put(url: string, data: any, options?: any): Observable<any> {
    return this.http.put(url, data, options);
  }

  delete(url: string, options?: any): Observable<any> {
    return this.http.delete(url, options);
  }
}
