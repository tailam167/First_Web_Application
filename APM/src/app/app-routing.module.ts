import { ProductListComponent } from './products/product-list/product-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductDetailGuard } from './products/product-detail/product-detail.guard';
import { ProductDetailComponent } from './products/product-detail/product-detail.component';
import { ProductNewComponent } from './products/product-new/product-new.component';
import { WelcomeComponent } from './home/welcome.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductUpdateComponent } from './products/product-update/product-update.component';
import { ProductDeleteComponent } from './products/product-delete/product-delete.component';

const routes: Routes = [
  { path: 'welcome', component: WelcomeComponent },
  { path: '', redirectTo: 'welcome', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
  { path: 'products/list', component: ProductListComponent },
  {path: 'products/new', component: ProductNewComponent},
  {path: 'product/update/:id', component: ProductUpdateComponent},
  {path: 'product/delete/:id', component: ProductDeleteComponent},
  {
    path: 'products/:id',
    canActivate: [ProductDetailGuard],
    component: ProductDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
