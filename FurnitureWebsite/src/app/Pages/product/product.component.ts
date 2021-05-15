import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/Shared Types/Product';
import { ProductservicesService } from './../../Sevices/Product/productservices.service';

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

}
