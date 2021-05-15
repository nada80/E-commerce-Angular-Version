import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductServicesService } from 'src/app/Sevices/Product/product-services.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  currentproduct = null;
  message = '';

  constructor(
    private productService: ProductServicesService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.message = '';
    this.getProduct(this.route.snapshot.paramMap.get('id'));
  }

  getProduct(id): void {
    this.productService.getProductById(id)
      .subscribe(
        product => {
          this.currentproduct = product;
          console.log(product);
        },
        error => {
          console.log(error);
        });
  }

  // setAvailableStatus(status): void {
  //   const data = {
  //     ProductName:this.currentproduct.name,
  //     price:this.currentproduct.price,
  //     Description :this.currentproduct.description,
  //     Color :this.currentproduct.color,
  //     Size :this.currentproduct.size,
  //     available :status
  
  //   };

  //   this.productService.update(this.currentproduct.id, data)
  //     .subscribe(
  //       response => {
  //         this.currentproduct.available = status;
  //         console.log(response);
  //       },
  //       error => {
  //         console.log(error);
  //       });
  // }

  updateProduct(): void {
    this.productService.update(this.currentproduct.id, this.currentproduct)
      .subscribe(
        response => {
          console.log(response);
          this.message = 'The product was updated!';
          alert("the product updated");
          this.router.navigate(['/dashbourd/products']);
        },
        error => {
          console.log(error);
        });
  }

  deleteProduct(): void {
    this.productService.delete(this.currentproduct.id)
      .subscribe(
        response => {
          console.log(response);
          alert("the product deleted");

          this.router.navigate(['/dashbourd/products']);
        },
        error => {
          console.log(error);
        });
  }

}
