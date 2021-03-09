import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpErrorResponse, HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, of, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ErrorHandlerService } from './error-handler.service';
// import { ErrorHandlerService } from './error-handler.service';

@Injectable()
export class Interceptor implements HttpInterceptor {

  constructor(private router: Router, private http: HttpClient, private errorHandlerService: ErrorHandlerService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let token;

    token = (localStorage.getItem('jwtToken') == undefined) ? '' : ('Bearer ' + localStorage.getItem('jwtToken'));
    req = req.clone({
      setHeaders: {
        "Authorization": token,
        // "Content-Type": (req.headers.get('Content-Type')) ? req.headers.get('Content-Type') + '; boundary=----border----' : "application/json",
        "Accept": "application/json"
      }
    });

    if (req.url === '/api/test/user' || req.url === '/api/test/mod' || req.url === '/api/test/admin') return next.handle(req);

    return next.handle(req).pipe(
      catchError((error) => {
        if (error instanceof HttpErrorResponse) this.errorHandlerService.handle(error);
        return of(error);
      })
    );
  }

}
