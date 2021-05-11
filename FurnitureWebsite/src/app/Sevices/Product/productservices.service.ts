import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ProductservicesService {
  private productsUrl = "http://localhost:5000/api/Products";


  constructor(private http:HttpClient) { }

  getAllProducts() {
    return this.http.get(this.productsUrl);
}


}
