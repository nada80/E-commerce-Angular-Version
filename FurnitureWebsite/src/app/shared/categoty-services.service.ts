import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Category } from './category.model';


@Injectable({
  providedIn: 'root'
})
export class CategotyServicesService {

  formData: Category= new Category();
  readonly baseURL = 'http://localhost:5000/api/Categories';
  list : Category[];
 
  constructor(private http: HttpClient) {

   }

   postCategory() {
    return this.http.post(this.baseURL, this.formData);
  }
  refreshList() {
    this.http.get(this.baseURL)
      .toPromise()
      .then(res =>this.list = res as Category[]);
  }
}
