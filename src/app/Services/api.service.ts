import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError, map } from 'rxjs';
import { environment } from 'src/environment/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  get apiUrl(): string { return environment.api_url; }

  get headers(): HttpHeaders {
    const headerConfig = {
      'Content-Type': 'application/json'
    }

    return new HttpHeaders(headerConfig);
  }

  get(path: string) {
    return this.http.get(`${this.apiUrl}${path}`, { headers: this.headers }).pipe(
      catchError((error) => {
        console.error('An error occurred:', error);
        return throwError(error);
      }),
      map((res: any) => {
        return res;
      }),
    )
  }
}
