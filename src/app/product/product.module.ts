import { NgModule } from '@angular/core';
import { ProductRoutingModule } from './product-routing.module';
import { ProductComponent } from './product.component';
import { ProductListContainerComponent } from './product-list-container/product-list-container.component';
import { ProductListPresentationComponent } from './product-list-container/product-list-presentation/product-list-presentation.component';
import { ProductDetailsPresentationComponent } from './product-list-container/product-details-presentation/product-details-presentation.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    ProductComponent,
    ProductListContainerComponent,
    ProductListPresentationComponent,
    ProductDetailsPresentationComponent,
  ],
  imports: [ProductRoutingModule, SharedModule],
  providers: [],
})
export class ProductModule {}
