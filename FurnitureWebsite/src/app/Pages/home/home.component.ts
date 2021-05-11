import { Component, OnInit } from '@angular/core';
import { HomeservicesService } from 'src/app/Sevices/Home/Homeservices.service';
import { Iproduct } from 'src/app/Interface/Iproduct';
import { Icategory } from 'src/app/Interface/Icategory';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  products: Iproduct[] = [];
  productList:Iproduct[]=[];
  categories: Icategory[] = [];
  categoryList:Icategory[]=[];

  constructor(private HomeService: HomeservicesService) { }

  ngOnInit(): void {
    this.loadProducts();
    this.loadCategories();
  }
  loadCategories(){

    this.HomeService.getAllCategories()
    .subscribe(
        (categories: any[]) => {
            this.categories = categories;
            this.categories.forEach(category => {
                this.categoryList.push(category);
            })
        },
        (error) => console.log(error)
    );
  }
  loadProducts() {
    this.HomeService.getAllProducts()
        .subscribe(
            (products: any[]) => {
                this.products = products;
                this.products.forEach(product => {
                    this.productList.push(product);
                })
            },
            (error) => console.log(error)
        );
}
}
