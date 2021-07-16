import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { ProductServeice } from './../product.service';

@Component({
  selector: 'pm-product-new',
  templateUrl: './product-new.component.html',
  styleUrls: ['./product-new.component.css'],
})

export class ProductNewComponent implements OnInit {
  @Output() saveNewProduct = new EventEmitter();

  products?: any;
  numRegex = /^-?\d*[.,]?\d{1,5}$/;
  productName!: FormControl;
  productCode!: FormControl;
  releaseDate!: FormControl;
  description!: FormControl;
  price!: FormControl;
  starRating!: FormControl;
  imageUrl!: FormControl;
  productForm!: FormGroup;
  // tslint:disable-next-line: ban-types
  validMessage: String = '';

  constructor(private route: Router, private productService: ProductServeice) {}

  ngOnInit(): void {
    this.productName = new FormControl('', Validators.required);
    this.productCode = new FormControl('', Validators.required);
    this.releaseDate = new FormControl('', Validators.required);
    this.description = new FormControl('', Validators.required);
    this.price = new FormControl('', Validators.required);
    this.starRating = new FormControl('', [
      Validators.required,
      Validators.pattern(this.numRegex),
      Validators.min(1),
      Validators.max(5),
    ]);
    this.imageUrl = new FormControl('', Validators.required);

    this.productForm = new FormGroup({
      productName: this.productName,
      productCode: this.productCode,
      releaseDate: this.releaseDate,
      description: this.description,
      price: this.price,
      starRating: this.starRating,
      imageUrl: this.imageUrl,
    });
  }

  public saveEvent(formValues: FormGroup): void {
    if (formValues.value.valid) {
      this.productService.addProduct(formValues.value).subscribe(
        () => {
          formValues.reset();
          return true;
        },
        (error) => {
          return Observable.throw(error);
        }
      );
      this.validMessage = 'Your new product have been created !';
    } else {
      this.validMessage =
        'Please fill fully above fields to create a new product !';
    }
  }

  public cancel(): void {
    this.route.navigate(['/products/list']);
  }
}
