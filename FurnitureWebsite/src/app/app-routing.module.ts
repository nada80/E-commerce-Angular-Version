import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './Pages/cart/cart.component';
import { HomeComponent } from './Pages/home/home.component';
import { LoginComponent } from './Pages/login/login.component';
import { ProductOfCategoryComponent } from './Pages/product-of-category/product-of-category.component';
import { ProductComponent } from './Pages/product/product.component';
import { RegisterComponent } from './Pages/register/register.component';
import { ShopComponent } from './Pages/shop/shop.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductsCategoriesComponent } from './products-categories/products-categories.component';
import { ProductsComponent } from './products/products.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';

const routes: Routes = [
 {path:'',redirectTo:'/home',pathMatch:'full'}, 
  {path: 'home', component: HomeComponent},
  {path: 'shop', component: ShopComponent},
  {path:'products',component:ProductsComponent},
  {path: 'product', component: ProductComponent},
 {path:'cart',component:ShoppingCartComponent},
  {path: 'login', component: LoginComponent},  
  {path: 'register', component: RegisterComponent},
  {path: 'category/:id', component: ProductOfCategoryComponent},
{path:'productsCategories', component:ProductsCategoriesComponent},
  { path: '404', component: PageNotFoundComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
