import { Component, OnInit } from '@angular/core';
import { ProductServicesService } from 'src/app/Sevices/Product/product-services.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {
product={
 ProductName:'',
 price:0,
 Description :'',
 Color :'',
 Size :'',
 Image :'',
 Quantity :'',
 CategoryID :null,
 BrandID :null,
 available :false
};
submitted=false;
  constructor(private productServices: ProductServicesService) { }

  ngOnInit(): void {
  }

  createProduct(): void {
    const data = {
      ProductName:this.product.ProductName,
      price:this.product.price,
      Description :this.product.Description,
      Color :this.product.Color,
      Size :this.product.Size,
      Image :this.product.Image,
      Quantity :this.product.Quantity,
      CategoryID :this.product.CategoryID,
      BrandID :this.product.BrandID
    };

    this.productServices.createProduct(data)
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
      Description :'',
      Color :'',
      Size :'',
      Image :'',
      Quantity :'',
      CategoryID :null,
      BrandID :null,
      available :false
    };
  }
}
