import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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
import { AdminLayoutComponent } from './AdminLayout/admin-layout/admin-layout.component';
<<<<<<< Updated upstream
import { AddProductComponent } from './Dashboard/product/add-product/add-product.component';
import { UpdateProductComponent } from './Dashboard/product/update-product/update-product.component';
import { GetAlProductComponent } from './Dashboard/product/get-al-product/get-al-product.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { DeleteProductComponent } from './Dashboard/product/delete-product/delete-product.component';
import { ProductDetailsComponent } from './Dashboard/product/product-details/product-details.component';
=======
import { BoardUserComponent } from './Pages/board-user/board-user.component';
import { ProfileComponent } from './Pages/profile/profile.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RegisterUserComponent } from './Authentication/register-user/register-user.component';


>>>>>>> Stashed changes


@NgModule({
  
  declarations: [
    AppComponent,
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
    GetComponent,
<<<<<<< Updated upstream
    AdminLayoutComponent,
    AddProductComponent,
    UpdateProductComponent,
    GetAlProductComponent,
    ProductDetailsComponent,
    DeleteProductComponent,
    AdminLayoutComponent,
    AddProductComponent,
    UpdateProductComponent,
    DeleteProductComponent,
    ProductDetailsComponent
=======
    GetDetailsComponent,
    AdminLayoutComponent,
    BoardUserComponent,
    ProfileComponent,
    RegisterUserComponent
>>>>>>> Stashed changes
    ],
  imports: [
    BrowserModule,
    RouterModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule

  ],
  
  providers: [
    HomeservicesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
