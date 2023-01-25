import { Component, OnInit } from '@angular/core';
import { ProductResponse } from 'src/app/shared/interfaces/product.interface';
import { ProductsService } from 'src/app/shared/services/products/products.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent implements OnInit {
  public adminProducts: Array<ProductResponse> = [];

  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    this.loadProducts();
  }
  loadProducts(): void {
    this.productsService.getAll().subscribe((data) => {
      this.adminProducts = data;
    });
  }
}
