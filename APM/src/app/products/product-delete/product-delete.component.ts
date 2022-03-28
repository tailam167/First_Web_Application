import { ProductServeice } from './../product.service';
import { Component, OnInit } from '@angular/core';
import { IProducts } from '../product.interface';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'pm-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css'],
})
export class ProductDeleteComponent implements OnInit {
  deleteProduct!: IProducts;
  validMessage?: string;
  products: IProducts[] = [];
  errorMessage = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductServeice
  ) {}

  ngOnInit(): void {
    this.getProduct();
  }

  public onDeleteProduct(productId: any): void {
    this.productService.deleteProduct(productId).subscribe(
      (response: void) => {
        console.log(response);
        this.router.navigate(['/products/list']);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public getProduct(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.productService.getProduct(id).subscribe({
      next: (product) => {
        this.deleteProduct = product;
      },
      error: (err) => (this.errorMessage = err),
      complete: () => console.log('Completed subscription !'),
    });
  }

  public cancel(): void {
    this.router.navigate(['/products/list']);
  }
}
