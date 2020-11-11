import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable()
export class AuthService {

  constructor(private http: HttpClient) { }

  login(user): Observable<any> {
    return this.http.post<any>(environment.url + '/auth/signin', user);
  }

}
