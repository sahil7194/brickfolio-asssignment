import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsListComponent } from './Components/products-list/products-list.component';
import { CategoryProductsListComponent } from './Components/category-products-list/category-products-list.component';
import { ProductInfoComponent } from './Components/product-info/product-info.component';

const routes: Routes = [
  { path: '', component: ProductsListComponent },
  { path: 'products/category/:category_name', component: CategoryProductsListComponent },
  { path: 'products/:id', component: ProductInfoComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
