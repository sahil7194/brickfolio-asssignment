import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private apiService: ApiService) { }

  getAllProducts() {
    return this.apiService.get('products');
  }

  getProduct(productId: number | string) {
    return this.apiService.get('products/' + productId);
  }

  getProductsCategory() {
    return this.apiService.get('products/categories');
  }

  getCategoriesProducts(category: string) {
    return this.apiService.get('products/category/' + category);
  }
}
