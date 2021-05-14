import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './Pages/cart/cart.component';
import { HomeComponent } from './Pages/home/home.component';
import { LoginComponent } from './Pages/login/login.component';
import { ProductOfCategoryComponent } from './Pages/product-of-category/product-of-category.component';
import { ProductComponent } from './Pages/product/product.component';
import { RegisterComponent } from './Pages/register/register.component';
import { ShopComponent } from './Pages/shop/shop.component';

const routes: Routes = [
  {path: '', component: HomeComponent},  
  {path: 'home', component: HomeComponent},
  {path: 'shop', component: ShopComponent},
  {path: 'product', component: ProductComponent},
  {path: 'login', component: LoginComponent},  
  {path: 'register', component: RegisterComponent},
  {path: 'category/:id', component: ProductOfCategoryComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
