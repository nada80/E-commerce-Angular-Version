import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Icategory } from 'src/app/Interface/Icategory';
import { throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class HomeservicesService {


  constructor(private http:HttpClient) { }


// not work ???

// getAllCategories():Observable<Icategory[]> {
//   let url = `${environment.baseURL}/category`;
//   return this.http.get<Icategory[]>(url);
// }
getAllCategories() {
  return this.http.get(`${environment.baseURL}/Categories`);
}
// getCategoryById(id:number):Observable<ICategory>{
//   let url = `${environment.apiUrl}/api/category/${id}`;
//   return this._http.get<ICategory>(url).pipe(catchError((err)=>
//   {
//     return throwError(err.message ||"Internal Server error contact site adminstarator");
//   }));
// }
// addNewCategory(newCategory:ICategory):Observable<ICategory>{
//   let url = `${environment.apiUrl}/api/Categories`;
//   return this._http.post<Icategory>(url, newCategory)
//           .pipe(catchError((err)=>{
//             return throwError(err.message ||"Internal Server error contact site adminstarator");
//               }
//             ));
// }
// updateCategory(id:number, categoryToUpdate:ICategory):Observable<ICategory>{
//   let url = `${environment.apiUrl}/api/category/${id}`;
//   return this._http.put<ICategory>(url, categoryToUpdate)
//           .pipe(catchError((err)=>{
//             return throwError(err.message ||"Internal Server error contact site adminstarator");
//               }
//             ));
// }
// deleteCategory(id:number):Observable<any>{
//   let url = `${environment.apiUrl}/api/category/${id}`;
//   return this._http.delete<any>(url).pipe(catchError((err)=>
//   {
//     return throwError(err.message ||"Internal Server error contact site adminstarator");
//   }));
// }


// addToCart(payload) {
//   return this.http.post(`${environment.baseURL}/CartItems`, payload);
// }
// getCartItems() {
//   return this.http.get(`${environment.baseURL}/Carts`);
// }
// increaseQty(payload) {
//   return this.http.post(`${environment.baseURL}/CartItems`, payload);
// }
// emptyCart() {
//   return this.http.delete(`${environment.baseURL}/cart/empty-cart`);
// }

}
