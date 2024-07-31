import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { ProductService } from 'src/app/shared/service/product.service';
import { CommunicationService } from '../../service/communication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public cartLength!: number;
  constructor(
    public auth: AuthService,
    private productService: ProductService,
    private communication: CommunicationService
  ) {}

  ngOnInit(): void {
    this.communication.refreshHeader$.subscribe((res) => {
      if (res === false || res) {
        this.productService.getAddToCartProduct().subscribe((res) => {
          this.cartLength = res.length;
        });
      }
    });
  }
}
