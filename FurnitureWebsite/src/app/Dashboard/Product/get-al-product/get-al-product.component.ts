import { Component, OnInit } from '@angular/core';
import { Iproduct } from 'src/app/Interface/Iproduct';
import { ProductServicesService } from 'src/app/Sevices/Product/product-services.service';

@Component({
  selector: 'app-get-al-product',
  templateUrl: './get-al-product.component.html',
  styleUrls: ['./get-al-product.component.scss']
})
export class GetAlProductComponent implements OnInit {

  products: any;
  currentProduct = null;
  currentIndex = -1;
  name = '';
  productList:Iproduct[]=[];

  constructor(private productService: ProductServicesService) { }

  ngOnInit(): void {
    this.readProducts();
  }

  readProducts(): void {
    this.productService.getAllProducts()
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

  refresh(): void {
    this.readProducts();
    this.currentProduct = null;
    this.currentIndex = -1;
  }

  setCurrentProduct(product, index): void {
    this.currentProduct = product;
    this.currentIndex = index;
  }

  deleteAllProducts(): void {
    this.productService.deleteAll()
      .subscribe(
        response => {
          console.log(response);
          this.readProducts();
        },
        error => {
          console.log(error);
        });
  }

  searchByName(): void {
    this.productService.searchByName(this.name)
      .subscribe(
        products => {
          this.products = products;
          console.log(products);
        },
        error => {
          console.log(error);
        });
  }
}
