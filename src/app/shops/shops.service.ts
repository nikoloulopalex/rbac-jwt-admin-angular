import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ShopsService {

  constructor(private http: HttpClient) { }


  getShops(params): Observable<any> {
    return this.http.get<any>(environment.url + '/shops', { params: params });
  }

  getProductsOfShop(id) {
    return this.http.get<any>(environment.url + `/shops/${id}` + '/products');
  }
}
