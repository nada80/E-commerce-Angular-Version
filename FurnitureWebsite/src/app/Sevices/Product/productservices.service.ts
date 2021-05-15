import { ErrorHandler, Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Product } from './../../Shared Types/Product';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { ProductController } from './../../API/ProductController/ProductsController';


@Injectable({
  providedIn: 'root'
})
export class ProductservicesService {
  
  // private ProductURL = 'http://localhost:56398/api/Products';
  private ProductURL = ProductController.GetAllProducts;
  constructor(private http:HttpClient,  private router: Router) { }
  private errorHandle: ErrorHandler = new ErrorHandler();

  getProducts(): Observable<Product[]>
  {
    try{
      return this.http.get<Product[]>(this.ProductURL);
    }catch (error){
      this.errorHandle.handleError(error);      
    }
  }

  getProductByID(productId: number): Observable<Product>
  {
    try{
      const URL = `${this.ProductURL}/${productId}`;
      return this.http.get<Product>(URL);
    }catch (error){
      this.errorHandle.handleError(error);      
    }
  }

  insertToCart(productId: number, cartItemId: number, cartQuantity: number): Observable<Product> {
    try {
      const params = new HttpParams().set('quantity', cartQuantity.toString());
      const urlById = `${this.ProductURL}/${productId}/addtocart/${cartItemId}`;
      return this.http.post<Product>(urlById, null, {params});
    } catch (error) {
      this.errorHandle.handleError(error);
    }
  }

  updateProductCartQuantity(productId: number, cartQuantity: number): Observable<void> {
    try {
      const params = new HttpParams().set('cartQuantity', cartQuantity.toString());
      const urlById = `${this.ProductURL}/${productId}/update-quantity`;
      return this.http.patch<void>(urlById, null, {
        params
      });
    } catch (error) {
      this.errorHandle.handleError(error);
    }
  }

  viewProductDetails(product: Product) {
    this.router.navigate(['/products', product.ID], {
      queryParams: {
        Name: product.ProductName
      }
    })
  }

  // pushToCart(productId: number, quantity: number) {
  //   if (this.authService.cartItem) {
  //     this.insertToCart(productId, this.authService.cartItem.id, quantity)
  //       .subscribe(res => {
  //         this.router.navigate(['/cart'],
  //           {
  //             queryParams: {
  //               Updated: true
  //             }
  //           })
  //       })
  //   }
  // }

}
