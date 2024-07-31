import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListContainerComponent } from './product-list-container/product-list-container.component';
import { ProductComponent } from './product.component';

const routes: Routes = [
  {
    path: '',
    component: ProductComponent,
    children: [
      {
        path: '',
        component: ProductListContainerComponent,
      },
      {
        path: 'detail/:id',
        component: ProductListContainerComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductRoutingModule {}
