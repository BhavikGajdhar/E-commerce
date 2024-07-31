import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddToCardComponent } from './core/component/add-to-card/add-to-card.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
    import('./product/product.module').then((m) => m.ProductModule),
  },
  {
    path:"cart",
    component:AddToCardComponent
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
