import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
<<<<<<< Updated upstream
import { AdminLayoutComponent } from './AdminLayout/admin-layout/admin-layout.component';
import { AddProductComponent } from './Dashboard/product/add-product/add-product.component';
import { DeleteProductComponent } from './Dashboard/product/delete-product/delete-product.component';
import { GetAlProductComponent } from './Dashboard/product/get-al-product/get-al-product.component';
import { ProductDetailsComponent } from './Dashboard/product/product-details/product-details.component';
import { UpdateProductComponent } from './Dashboard/product/update-product/update-product.component';
import { CartComponent } from './Pages/cart/cart.component';
import { HomeComponent } from './Pages/home/home.component';
import { LoginComponent } from './Pages/login/login.component';
=======
import { RegisterUserComponent } from './authentication/register-user/register-user.component';
import { CartComponent } from './Pages/cart/cart.component';
import { HomeComponent } from './Pages/home/home.component';
>>>>>>> Stashed changes
import { PageNotFoundComponent } from './Pages/page-not-found/page-not-found.component';
import { ProductOfCategoryComponent } from './Pages/product-of-category/product-of-category.component';
import { ProductComponent } from './Pages/product/product.component';
import { ProductsCategoriesComponent } from './Pages/products-categories/products-categories.component';
<<<<<<< Updated upstream
import { RegisterComponent } from './Pages/register/register.component';
=======
>>>>>>> Stashed changes
import { ShopComponent } from './Pages/shop/shop.component';
import { ShoppingCartComponent } from './Pages/shopping-cart/shopping-cart.component';

const routes: Routes = [
 {path:'',redirectTo:'/home',pathMatch:'full'}, 
  {path: 'home', component: HomeComponent},
  {path: 'dashbourd', component: AdminLayoutComponent},
  {path: 'shop', component: ShopComponent},
<<<<<<< Updated upstream
  {path:'products',component:ProductComponent},
  {path:'dashbourd/products',component:GetAlProductComponent},
  {path: 'dashbourd/create', component: AddProductComponent},
  {path: 'UpdateProsuct/:id', component: UpdateProductComponent},
  {path: 'DeletProduct/:id', component: DeleteProductComponent},
  {path: 'dashbourd/product/:id', component: ProductDetailsComponent},
  {path:'cart',component:ShoppingCartComponent},
  {path: 'product', component: ProductComponent},
  {path: 'login', component: LoginComponent},  
  {path: 'register', component: RegisterComponent},
=======
  {path: 'product', component: ProductComponent},
 {path:'cart',component:ShoppingCartComponent},
 { path: 'authentication', loadChildren: () => import('./authentication/authentication.module').then(m => m.AuthenticationModule) },
  {path: 'register', component: RegisterUserComponent},
>>>>>>> Stashed changes
  {path: 'category/:id', component: ProductOfCategoryComponent},
  {path:'productsCategories', component:ProductsCategoriesComponent},
  { path: '404', component: PageNotFoundComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
