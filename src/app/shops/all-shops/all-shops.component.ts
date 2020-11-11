import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ShopsService } from '../shops.service';

@Component({
  selector: 'ngx-all-shops',
  templateUrl: './all-shops.component.html',
  styleUrls: ['./all-shops.component.scss']
})
export class AllShopsComponent implements OnInit {

  shops = [];
  constructor(private shopsService: ShopsService, private router: Router) { }

  ngOnInit(): void {
    this.getShops();
  }

  getShops() {
    this.shopsService.getShops({}).subscribe(data => {
      this.shops = data;
    })
  }

  toShopProducts(shop) {
    this.router.navigate(['/shops/' + shop.id])
  }

}
