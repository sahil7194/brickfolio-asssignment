import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavBarComponent } from './Components/nav-bar/nav-bar.component';
import { ProductsListComponent } from './Components/products-list/products-list.component';
import { CategoryProductsListComponent } from './Components/category-products-list/category-products-list.component';
import { ProductComponent } from './Components/product/product.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ProductsListComponent,
    CategoryProductsListComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
