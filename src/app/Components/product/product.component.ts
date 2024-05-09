import { Component, Input } from '@angular/core';
import { Products } from 'src/app/Models/products';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

  @Input() product!:Products;

}
