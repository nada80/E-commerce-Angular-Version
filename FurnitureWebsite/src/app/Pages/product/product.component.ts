import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/Shared Types/Product';
import { ProductservicesService } from './../../Sevices/Product/productservices.service';
import { Iproduct } from 'src/app/Interfaces/Iproduct';
import { HomeservicesService } from 'src/app/Sevices/Home/Homeservices.service';
import { ProductServicesService } from 'src/app/Sevices/Product/product-services.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  products: Product[];
  constructor(private route: ActivatedRoute, private router: Router, public productService: ProductservicesService) { 
    if (route.snapshot.data.products) {
      this.products = route.snapshot.data.products;
    }
  }

  ngOnInit(): void {
  }

  viewProductDetails(product: Product) {
    this.productService.viewProductDetails(product);
  }
  products: Iproduct[] = [];
  productList:Iproduct[]=[];


  constructor(private HomeService: ProductServicesService , private productservices: ProductServicesService) { }

  ngOnInit(): void {
    this.loadProducts();
  }
 
  loadProducts() {
    this.productservices.getAllProducts()
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
// _addItemToCart( id, quantity): void {
//   let payload = {
//     productId: id,
//     quantity,
//   };
//   this.HomeService.addToCart(payload).subscribe(() => {
//     this.loadProducts();
//     alert('Product Added');
//   });
// }

}
