import { ProductServeice } from '../product.service';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { IProducts } from '../product.interface';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  providers: [ProductServeice],
})

// Lesson 1: Component
export class ProductListComponent implements OnInit, AfterViewInit {
  // Building a template
  productPageTitle = 'Danh sách sản phẩm';
  filterByTxt = 'Tìm kiếm';
  imageWidth = 50;
  imageMargin = 5;
  showImage = false;
  // errorMessaage: string = 'Can not get product list';
  // Using subcription
  // sub!: Subscription;
  // Apply interface for setting specific type of filtered product list
  filteredProducts: IProducts[] = [];
  // Apply interface for setting specific type of product list
  products: IProducts[] = [];

  private _listFilter = '';
  editProduct!: IProducts;
  deleteProduct!: IProducts;

  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    console.log('In setter: ' + value);
    this.filteredProducts = this.performFilter(value);
  }

  constructor(private productService: ProductServeice, private modalService: NgbModal) {}

  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  ngOnInit(): void {
    console.log('In OnInit process...');
    this.getProducts();
  }

  ngAfterViewInit(): void {
    this.getProducts();
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

  public onOpenModal(product: IProducts, mode: string): void {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (mode === 'edit') {
      this.editProduct = product;
      button.setAttribute('data-target', '#updateProductModal');
    }
    if (mode === 'delete') {
      this.deleteProduct = product;
      button.setAttribute('data-target', '#deleteProductModal');
    }
    container?.appendChild(button);
    button.click();
  }
}
