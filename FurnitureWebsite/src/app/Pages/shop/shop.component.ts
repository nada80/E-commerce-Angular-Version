import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryservicesService } from 'src/app/Sevices/Category/categoryservices.service';
import { Category } from 'src/app/Shared Types/Category';
import { Product } from 'src/app/Shared Types/Product';
import { Component, OnInit } from '@angular/core';
import { Iproduct } from 'src/app/Interfaces/Iproduct';
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


  categories: Category[];
  @Input() inputCategories: Category[];

  constructor(private route: ActivatedRoute, private router: Router,
    private categoryService: CategoryservicesService) { 
      if (this.route.snapshot.data.categories) {
        this.categories = this.route.snapshot.data.categories;
      }
    }
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

  // viewProductDetails(product: Product) {
  //   this.router.navigate(['/products', product.ID], {
  //     queryParams: {
  //       Name: product.ProductName
  //     }
  //   })
  // }

}
