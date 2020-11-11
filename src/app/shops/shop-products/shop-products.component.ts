import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ShopsService } from '../shops.service';

@Component({
  selector: 'ngx-shop-products',
  templateUrl: './shop-products.component.html',
  styleUrls: ['./shop-products.component.scss']
})
export class ShopProductsComponent implements OnInit {

  products = [];
  constructor(private shopService: ShopsService, private router: Router) { }

  ngOnInit(): void {
    this.getProductsOfShop();
  }

  getProductsOfShop() {
    this.shopService.getProductsOfShop(this.router.url.split('/')[2]).subscribe(data => {
      this.products = data;
    })
  }

}
