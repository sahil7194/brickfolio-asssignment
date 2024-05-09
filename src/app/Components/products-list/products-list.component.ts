import { ProductsService } from './../../Services/products.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {

  products!: any;

  constructor(private productsService: ProductsService) {

  }

  ngOnInit(): void {
    this.fetchProducts();
  }

  fetchProducts() {
    this.productsService.getAllProducts().subscribe({
      next: (res: any) => {
        this.products = res.products;
      }
    })
  }
}
