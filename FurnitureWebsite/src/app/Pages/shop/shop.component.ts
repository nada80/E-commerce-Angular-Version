import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryservicesService } from 'src/app/Sevices/Category/categoryservices.service';
import { Category } from 'src/app/Shared Types/Category';
import { Product } from 'src/app/Shared Types/Product';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {

  categories: Category[];
  @Input() inputCategories: Category[];

  constructor(private route: ActivatedRoute, private router: Router,
    private categoryService: CategoryservicesService) { 
      if (this.route.snapshot.data.categories) {
        this.categories = this.route.snapshot.data.categories;
      }
    }

  ngOnInit(): void {
  }

  // viewProductDetails(product: Product) {
  //   this.router.navigate(['/products', product.ID], {
  //     queryParams: {
  //       Name: product.ProductName
  //     }
  //   })
  // }

}
