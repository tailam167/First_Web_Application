import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProducts } from '../product.interface';
import { ProductServeice } from '../product.service';

@Component({
  selector: 'pm-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css'],
})
export class ProductUpdateComponent implements OnInit {
  products: IProducts[] = [];
  @Input() editProduct!: IProducts;
  errorMessage = '';
  validMessage?: string;
  numRegex = /^-?\d*[.,]?\d{1,5}$/;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductServeice
  ) {}

  ngOnInit(): void {
    this.getProduct();
  }

  public onUpdateProduct(product: IProducts): void {
    this.productService.updateProduct(product).subscribe(
     () => {
        console.log(product);
      },
      (err: HttpErrorResponse) => alert(err.message),
      () => console.log('Completed subscription !'),
    );
    this.validMessage = 'Your product have been updated !';
    console.log(this.validMessage);
    this.router.navigate(['/products/list']);
  }

  public getProduct(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.productService.getProduct(id).subscribe(
      (response: IProducts) => {
        this.editProduct = response;
        console.log(this.editProduct);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public cancel(): void {
    this.router.navigate(['/products/list']);
  }
}
