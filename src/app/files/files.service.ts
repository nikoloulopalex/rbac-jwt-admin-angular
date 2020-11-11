import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FilesService {

  constructor(private http: HttpClient) { }


  /** USER REQUESTS START HERE **/
  getFiles(params): Observable<any> {
    return this.http.get<any>(environment.url + '/files', { params: params });
  }
}
