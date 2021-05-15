import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { CategoryservicesService } from '../Sevices/Category/categoryservices.service';
import { Category } from '../Shared Types/Category';

@Injectable({
  providedIn: 'root'
})
export class CategoryResolverService {

  constructor(private categoryService: CategoryservicesService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Category[]> {
    return this.categoryService.getCategories();
  }
}
