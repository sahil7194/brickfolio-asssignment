import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/Services/products.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent  implements OnInit{

  categories!:any;

  constructor (private productsService:ProductsService) {}

  ngOnInit(): void {
    this.fetchCategories();
  }

  fetchCategories(){
    this.productsService.getProductsCategory().subscribe({
      next:(res:any)=> {
         this.categories = res;
    },})
  }
}
