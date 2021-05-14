import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Pages/login/login.component';
import { RegisterComponent } from './Pages/register/register.component';
import { HomeComponent } from './Pages/home/home.component';
import { HeaderComponent } from './Pages/header/header.component';
import { FooterComponent } from './Pages/footer/footer.component';
import { CartComponent } from './Pages/cart/cart.component';
import { ShopComponent } from './Pages/shop/shop.component';
import { HomeservicesService } from './Sevices/Home/Homeservices.service';
import { HttpClientModule } from '@angular/common/http';
import { ProductComponent } from './Pages/product/product.component';
import { ProductOfCategoryComponent } from './Pages/product-of-category/product-of-category.component';
import { AddComponent } from './Dashboard/Category/add/add.component';
import { DeleteComponent } from './Dashboard/Category/delete/delete.component';
import { UpdateComponent } from './Dashboard/Category/update/update.component';
import { GetComponent } from './Dashboard/Category/get/get.component';


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
    ProductOfCategoryComponent,
    AddComponent,
    DeleteComponent,
    UpdateComponent,
    GetComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule

  ],
  
  providers: [
    HomeservicesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
