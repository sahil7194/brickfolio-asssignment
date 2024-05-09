import { ProductsService } from 'src/app/Services/products.service';
import { Component, OnChanges, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-category-products-list',
  templateUrl: './category-products-list.component.html',
  styleUrls: ['./category-products-list.component.css']
})
export class CategoryProductsListComponent implements OnInit {

  products!: any

  constructor(private router: ActivatedRoute, private productsService: ProductsService) { }
  ngOnInit(): void {
    this.router.params.subscribe({
      next: (value: any) => {
        if (value.category_name) {
          this.fetchCategoriesProducts(value.category_name);
        }
      },
    })
  }

  fetchCategoriesProducts(categoryName: string) {
    this.productsService.getCategoriesProducts(categoryName).subscribe({
      next: (res) => {
        this.products = res.products;

      }
    })
  }
}
