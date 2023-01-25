import { Component, OnInit, reflectComponentType } from '@angular/core';
import { CategoryService } from 'src/app/shared/services/category/category.service';
import {
  CategoryRequest,
  CategoryResponse,
} from 'src/app/shared/interfaces/category.interface';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public isBordItem: boolean = false;
  public isNavItems: boolean = false;
  public adminCategory: Array<CategoryResponse> = [];

  constructor(private categoryService: CategoryService) {}
  ngOnInit(): void {
    this.loadCategorys();
  }
  loadCategorys(): void {
    this.categoryService.getAll().subscribe((data) => {
      this.adminCategory = data;
    });
  }
}
