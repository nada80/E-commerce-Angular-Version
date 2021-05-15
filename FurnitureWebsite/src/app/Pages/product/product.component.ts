import { Component, OnInit } from '@angular/core';
import { Iproduct } from 'src/app/Interfaces/Iproduct';
import { HomeservicesService } from 'src/app/Sevices/Home/Homeservices.service';
import { ProductServicesService } from 'src/app/Sevices/Product/product-services.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
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
