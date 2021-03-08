import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { NbToastrService } from '@nebular/theme';

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlerService {

  constructor(private router: Router, private toastrService: NbToastrService) { }

  handle(error) {
    switch (error['status']) {
      case 401:
        localStorage.clear();
        this.router.navigate(['login']);
        break;
      default:
        this.toastrService.show(error.statusText, 'Error:', { status: 'danger' });
        break;
    }
  }
}
