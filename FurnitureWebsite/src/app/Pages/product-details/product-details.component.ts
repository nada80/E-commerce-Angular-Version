import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Product } from 'src/app/Shared Types/Product';
import { ProductservicesService } from './../../Sevices/Product/productservices.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  product: Product;
  constructor(private route: ActivatedRoute,  public productService: ProductservicesService) { 
    route.paramMap.subscribe((params: ParamMap) => {
      if (params.get('productId')) {
        this.productService.getProductByID(+params.get('productId'))
          .subscribe(resProduct => {
            this.product = resProduct;
          })
      }
    })
  }

  ngOnInit(): void {
  }

}
