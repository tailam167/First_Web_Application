import { ProductServeice } from './products/product.service';
// Import part
import { Component, OnInit } from '@angular/core';

// MetaData & Template
@Component({
  selector: 'pm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

// Class
export class AppComponent implements OnInit{
  pageTitle = 'Tai Lam\'s Store';
  imageUrl = './assets/images/tailam_logo.png';

  constructor(private productService: ProductServeice) {}

  ngOnInit(): void {
    console.log('In OnInit process App Component');
  }

  // public searchProducts(key: string): void{
  //   const results: IProducts;
  // }
}
