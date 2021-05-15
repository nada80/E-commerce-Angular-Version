import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './Pages/login/login.component';
import { RegisterComponent } from './Pages/register/register.component';
import { HomeComponent } from './Pages/home/home.component';
import { HeaderComponent } from './Pages/header/header.component';
import { FooterComponent } from './Pages/footer/footer.component';
import { CartComponent } from './Pages/cart/cart.component';
import { ShopComponent } from './Pages/shop/shop.component';
import { ProductComponent } from './Pages/product/product.component';
import { PageNotFoundComponent } from './Pages/page-not-found/page-not-found.component';
import { CheckoutComponent } from './Pages/checkout/checkout.component';
import { CategoryDetailesComponent } from './Pages/category-detailes/category-detailes.component';
import { ProductDetailsComponent } from './Pages/product-details/product-details.component';


@NgModule({
  
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    CartComponent,
    ShopComponent,
    ProductComponent,
    PageNotFoundComponent,
    CheckoutComponent,
    CategoryDetailesComponent,
    ProductDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
