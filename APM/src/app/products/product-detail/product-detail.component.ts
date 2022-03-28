import { ProductServeice } from './../product.service';
import { IProducts } from '../product.interface';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'pm-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  productDetailPageTitle = 'Chi tiết sản phẩm';
  product!: IProducts;
  errorMessage = '';
  products: IProducts[] = [];
  messageRatingClicked = '';

  constructor(private route: ActivatedRoute,
              private router: Router,
              private productService: ProductServeice) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.productService.getProducts().subscribe({
      next: products => {
        this.products = products;
        this.product = this.performFilter(id);
      },
      error: err => this.errorMessage = err,
      complete: () => console.log('Completed subscription !')
    });
  }

  performFilter(id: number): IProducts {
    return this.products.filter((product: IProducts) =>
      product.productId === id)[0];
  }

  onBack(): void {
    this.router.navigate(['/products/list']);
  }

  onRatingClicked(message: string): void {
    this.messageRatingClicked = message;
  }
}
