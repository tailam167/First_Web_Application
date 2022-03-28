import { ProductServeice } from './products/product.service';
// Import part
import { Component, Input, OnInit } from '@angular/core';
import { IProducts } from './products/product.interface';

// MetaData & Template
@Component({
  selector: 'pm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

// Class
export class AppComponent implements OnInit {
  pageTitle = 'Công Ty TNHH Green Choice';
  imageUrl = './assets/images/tailam_logo.png';
  products: IProducts[] = [];
  // Apply interface for setting specific type of filtered product list
  filteredProducts: IProducts[] = [];
  private _listFilter = '';

  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    console.log('In setter: ' + value);
    this.filteredProducts = this.performFilter(value);
  }

  constructor(private productService: ProductServeice) {}

  ngOnInit(): void {
    console.log('In OnInit process App Component');
    this.getProducts();
  }

  public searchProducts(key: string): void {
    const results: IProducts[] = [];
    for (const product of this.products) {
      if (
        product.productName.toLowerCase().indexOf(key.toLowerCase()) !== -1 ||
        product.productCode.toLowerCase().indexOf(key.toLowerCase()) !== -1 ||
        product.releaseDate.toDateString().toLowerCase().indexOf(key.toLowerCase()) !== -1 ||
        product.description.toLowerCase().indexOf(key.toLowerCase()) !== -1 ||
        product.price.toString().indexOf(key.toLowerCase()) !== -1 ||
        product.starRating.toString().indexOf(key.toLowerCase()) !== -1 ||
        product.imageUrl.toLowerCase().indexOf(key.toLowerCase()) !== -1
      ) {
        results.push(product);
      }
    }
    this.products = results;
    if (results.length === 0 || !key) {
      this.productService.getProducts();
    }
  }

  public getProducts(): void {
    this.productService.getProducts().subscribe({
      next: (products) => {
        this.products = products;
        this.filteredProducts = this.products;
      },
      error: (err) => alert(err.message),
      complete: () => console.log('Completed subscription !'),
    });
  }

  performFilter(filteredBy: string): IProducts[] {
    filteredBy = filteredBy.toLocaleLowerCase();
    return this.products.filter((product: IProducts) =>
      product.productName.toLocaleLowerCase().includes(filteredBy)
    );
  }
}
