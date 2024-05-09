import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Products } from 'src/app/Models/products';
import { ProductsService } from 'src/app/Services/products.service';

@Component({
  selector: 'app-product-info',
  templateUrl: './product-info.component.html',
  styleUrls: ['./product-info.component.css']
})
export class ProductInfoComponent implements OnInit {

  product!: Products;
  productId!: string | null;

  constructor(private router: ActivatedRoute, private productsService: ProductsService,
  ) {

  }

  ngOnInit(): void {
    this.productId = this.router.snapshot.paramMap.get('id');
    this.fetchProductInfo();
  }

  fetchProductInfo() {
    if (this.productId) {
      this.productsService.getProduct(this.productId).subscribe(res => {
        this.product = res;
      })
    }
  }
}

