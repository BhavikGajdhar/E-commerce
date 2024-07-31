import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ProductService } from 'src/app/shared/service/product.service';
import { CommunicationService } from '../../service/communication.service';

@Component({
  selector: 'app-add-to-card',
  templateUrl: './add-to-card.component.html',
  styleUrls: ['./add-to-card.component.scss'],
})
export class AddToCardComponent implements OnInit {
  public cartList: any;

  constructor(
    private productService: ProductService,
    private communication: CommunicationService
  ) {}

  ngOnInit(): void {
    this.getProduct();
  }

  public removeCart(id: number) {
    if (id) {
      this.productService.removeAddToCartProduct(id).subscribe(
        (res) => {
          alert('Deleted SuccessFully');
          this.communication.setCartLength(true);
          this.getProduct();
        },
        (error: any) => {}
      );
    }
  }

  getProduct() {
    this.productService.getAddToCartProduct().subscribe((res) => {
      this.cartList = res;
    });
  }
}
