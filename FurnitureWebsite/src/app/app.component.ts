import { Component } from '@angular/core';
import { CategoryservicesService } from './Sevices/Category/categoryservices.service';
import { Category } from './Shared Types/Category';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Amado';
  categories: Category[]; 
  constructor(private categoryService: CategoryservicesService){
    this.prepareCategories();
  }

  prepareCategories() {
    this.categoryService.getCategories()
      .subscribe(resData => {
        this.categories = resData;
      })
  }

  ngOnInit(): void {    
    this.prepareCategories();
  }
}
