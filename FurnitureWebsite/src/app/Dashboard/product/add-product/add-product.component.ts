import { Component, OnInit } from '@angular/core';
import { Iproduct } from 'src/app/Interface/Iproduct';
import { ProductServicesService } from 'src/app/Sevices/Product/product-services.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {
 product:Iproduct[];
  submitted:boolean=false;
  constructor( private productServices:ProductServicesService) { }

  ngOnInit(): void {
  }

  creatProduct():void{
    const data={
      ProductName: this.product.ProductName,
      price: number
      Description: string
      Color: string
      Size: string
      Image: string
      Quantity: number
      CategoryID: number
      BrandID: number
    }
  }
}
