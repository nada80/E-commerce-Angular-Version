import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './Pages/cart/cart.component';
import { HomeComponent } from './Pages/home/home.component';
import { LoginComponent } from './Pages/login/login.component';
import { PageNotFoundComponent } from './Pages/page-not-found/page-not-found.component';
import { RegisterComponent } from './Pages/register/register.component';
import { ShopComponent } from './Pages/shop/shop.component';
import { CheckoutComponent } from './Pages/checkout/checkout.component';
import { CategoryResolverService } from './resolvers/category-resolver.service';
import { ProductComponent } from './Pages/product/product.component';
import { ProductResolverService } from './resolvers/product-resolver.service';
import { ProductDetailsComponent } from './Pages/product-details/product-details.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},  
  {path: 'register', component: RegisterComponent},
  {path: 'shop', component: ShopComponent},
  {path: 'products', component: ProductComponent},
  {path: 'products/:productId', component: ProductDetailsComponent},
  {path: 'cart', component: CartComponent},
  {path: 'checkout', component: CheckoutComponent},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],  

exports: [RouterModule]
})
export class AppRoutingModule { }
