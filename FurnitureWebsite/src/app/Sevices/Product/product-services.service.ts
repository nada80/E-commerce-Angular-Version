import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductServicesService {

  constructor(private http:HttpClient) { }

  getAllProducts() {
    return this.http.get(`${environment.baseURL}/Products`);
}


getProductById(id): Observable<any> {
  return this.http.get(`${environment.baseURL}/Products/${id}`);
}

createProduct(data): Observable<any> {
  return this.http.post(`${environment.baseURL}/Products`, data);
}

update(id, data): Observable<any> {
  return this.http.put(`${environment.baseURL}/Products/${id}`, data);
}

delete(id): Observable<any> {
  return this.http.delete(`${environment.baseURL}/Products/${id}`);
}
<<<<<<< Updated upstream
deleteAll(): Observable<any> {
  return this.http.delete(`${environment.baseURL}/Products`);
}

searchByName(name): Observable<any> {
  return this.http.get(`${environment.baseURL}/Products?name=${name}`);
=======

searchByName(name): Observable<any> {
  return this.http.get(`${environment.baseURL}/Products?name=${name}`);
}
>>>>>>> Stashed changes
}
}