import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }


  /** USER REQUESTS START HERE **/
  getUsers(params): Observable<any> {
    return this.http.get<any>(environment.url + '/users', { params: params });
  }

  getSingleUser(id): Observable<any> {
    return this.http.get<any>(`/users/${id}`);
  }

  createUser(user): Observable<any> {
    return this.http.post<any>('/api/auth/signup', user);
  }


  /** USER REQUESTS END HERE **/

}
