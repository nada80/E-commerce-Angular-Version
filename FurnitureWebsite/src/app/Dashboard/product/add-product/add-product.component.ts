import { Component, OnInit } from '@angular/core';
import { Iproduct } from 'src/app/Interface/Iproduct';
import { ProductServicesService } from 'src/app/Sevices/Product/product-services.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {
  product = {
    ProductName:'',
   price:0,
   description :'',
   color :'',
   size :'',
   image :'',
   quantity :0,
   categoryID :null,
   brandID :null
    // available: false
  };
  submitted = false;

  constructor(private productService: ProductServicesService) { }

  ngOnInit(): void {
  }

  createProduct(): void {
    const data = {
   ProductName:this.product.ProductName,
   price:this.product.price,
   description :this.product.description,
   color :this.product.color,
   size :this.product.size,
   image :this.product.image,
   quantity :this.product.quantity,
   categoryID :this.product.categoryID,
   brandID :this.product.brandID

    };

    this.productService.createProduct(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }

  newProduct(): void {
    this.submitted = false;
    this.product = {
      ProductName:'',
      price:0,
      description :'',
      color :'',
      size :'',
      image :'',
      quantity :0,
      categoryID :null,
      brandID :null
    };
  }
}
