import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class HomeservicesService {
  private productsUrl = "http://localhost:5000/api/Products";

  private categorysUrl = "http://localhost:5000/api/Categories";

  constructor(private http:HttpClient) { }

  getAllProducts() {
    return this.http.get(this.productsUrl);
}

getAllCategories() {
  return this.http.get(this.categorysUrl);
}


}
