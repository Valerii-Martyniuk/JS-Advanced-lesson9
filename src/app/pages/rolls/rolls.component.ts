import { Component, OnInit } from '@angular/core';
import { ProductResponse } from 'src/app/shared/interfaces/product.interface';
import { ProductsService } from 'src/app/shared/services/products/products.service';

@Component({
  selector: 'app-rolls',
  templateUrl: './rolls.component.html',
  styleUrls: ['./rolls.component.scss'],
})
export class RollsComponent implements OnInit {
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
