import { ErrorHandler, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Category } from './../../Shared Types/Category';
import { Product } from 'src/app/Shared Types/Product';
import { CategoryController } from 'src/app/API/CategoryController/CategoryController';


@Injectable({
  providedIn: 'root'
})
export class CategoryservicesService {
  
  // private CategoryURL = 'http://localhost:56398/api/categories';
  private CategoryURL = CategoryController.GetAllCategories
  constructor(private http:HttpClient) { }
  private errorHandle: ErrorHandler = new ErrorHandler();
  
  getCategories(): Observable<Category[]>
  {
    try{
      return this.http.get<Category[]>(this.CategoryURL);
    }catch (error){
      this.errorHandle.handleError(error);      
    }
  }

  getCategoryByID(categoryId: number): Observable<Category>
  {
    try{
      const URL = `${this.CategoryURL}/${categoryId}`;
      return this.http.get<Category>(URL);
    }catch (error){
      this.errorHandle.handleError(error);      
    }
  }

  createCategory(category: any): Observable<Category>
  {
    try{
      return this.http.post<Category>(this.CategoryURL, category);
    }catch (error){
      this.errorHandle.handleError(error);      
    }
  }

  updateCategory(categoryId:number, category: any): Observable<void>
  {
    try{
      const URL = `${this.CategoryURL}/${categoryId}`
      return this.http.put<void>(URL, category);
    }catch (error){
      this.errorHandle.handleError(error);      
    }
  }

  deleteCategory(categoryId:number): Observable<any>
  {
    try{
      const URL = `${this.CategoryURL}/${categoryId}`
      return this.http.delete<any>(URL);
    }catch (error){
      this.errorHandle.handleError(error);      
    }
  }

  updateProduct(
    categoryId: number,
    productId: number,
    updateProduct: any
  ): Observable<void> {
    try {
      const ProductUrl = `${this.CategoryURL}/${categoryId}/products/${productId}`;
      return this.http.put<void>(ProductUrl, updateProduct);
    } catch (error) {
      this.errorHandle.handleError(error);
    }
  }

  getCategoryProducts(): Observable<Product[]> {
    try {
      return this.http.get<Product[]>(`${this.CategoryURL}/products`);
    } catch (error) {
      this.errorHandle.handleError(error);
    }
  }

  deleteProduct(categoryId: number, productId: number) {
    try {
      const urlById = `${this.CategoryURL}/${categoryId}/products/${productId}`;
      return this.http.delete<void>(urlById);
    } catch (error) {
      this.errorHandle.handleError(error);
    }
  }

  addProduct(categoryId: number, createProduct: any): Observable<void> {
    try {
      const urlById = `${this.CategoryURL}/${categoryId}/products`;
      return this.http.post<void>(urlById, createProduct);
    } catch (err) {
      this.errorHandle.handleError(err);
    }
  }
}
