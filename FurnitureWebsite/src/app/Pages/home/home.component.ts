import { Component, OnInit } from '@angular/core';
import { ProductservicesService } from 'src/app/Sevices/Product/productservices.service';
import { Iproduct } from 'src/app/Interface/Iproduct';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  products: Iproduct[] = [];
  productOrders:Iproduct[]=[];

  constructor(private ProductService: ProductservicesService) { }

  ngOnInit(): void {
    this.loadProducts();
  }
  loadProducts() {
    this.ProductService.getAllProducts()
        .subscribe(
            (products: any[]) => {
                this.products = products;
                this.products.forEach(product => {
                    this.productOrders.push(product);
                })
            },
            (error) => console.log(error)
        );
}
}
