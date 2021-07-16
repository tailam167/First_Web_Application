import { ProductServeice } from './product.service';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from './../shared/shared.module';
import { ConvertToSpace } from './../shared/convert-to-spaces.pipe';
import { ProductListComponent } from './product-list/product-list.component';
import { NgModule } from '@angular/core';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { RouterModule, Routes } from '@angular/router';
import { ProductDetailGuard } from './product-detail/product-detail.guard';
import { ProductNewComponent } from './product-new/product-new.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ProductUpdateComponent } from './product-update/product-update.component';
import { ProductDeleteComponent } from './product-delete/product-delete.component';

const appRouter: Routes = [
  { path: 'products/list', component: ProductListComponent },
  { path: 'products/new', component: ProductNewComponent },
  { path: 'product/update/:id', component: ProductUpdateComponent },
  {path: 'product/delete/:id', component: ProductDeleteComponent},
  {
    path: 'products/:id',
    canActivate: [ProductDetailGuard],
    component: ProductDetailComponent,
  },
];

@NgModule({
  declarations: [
    ProductListComponent,
    ProductDetailComponent,
    ConvertToSpace,
    ProductNewComponent,
    ProductUpdateComponent,
    ProductDeleteComponent,
  ],
  imports: [
    RouterModule.forChild(appRouter),
    SharedModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [ProductServeice],
})
export class ProductModule {}
