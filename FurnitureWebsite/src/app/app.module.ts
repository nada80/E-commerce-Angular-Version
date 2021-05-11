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
import { ProductservicesService } from './Sevices/Product/productservices.service';
import { HttpClientModule } from '@angular/common/http';


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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule

  ],
  
  providers: [
    ProductservicesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
