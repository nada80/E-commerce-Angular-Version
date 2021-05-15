import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Product } from '../Shared Types/Product';
import { ProductservicesService } from './../Sevices/Product/productservices.service';

@Injectable({
  providedIn: 'root'
})
export class ProductResolverService {

  constructor(private productService: ProductservicesService) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Product[]> {
    return this.productService.getProducts();
  }
}
