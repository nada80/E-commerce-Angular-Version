import { Component, OnInit } from '@angular/core';
import { Iproduct } from 'src/app/Interface/Iproduct';
import { HomeservicesService } from 'src/app/Sevices/Home/Homeservices.service';
import { ProductServicesService } from 'src/app/Sevices/Product/product-services.service';


@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {
  products: Iproduct[] = [];
  productList:Iproduct[]=[];


  constructor(private HomeService: ProductServicesService) { }

  ngOnInit(): void {
    this.loadProducts();
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
_addItemToCart( id, quantity): void {
  let payload = {
    productId: id,
    quantity,
  };
  // this.HomeService.addToCart(payload).subscribe(() => {
  //   this.loadProducts();
  //   alert('Product Added');
  // });
}

}
