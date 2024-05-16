import { Component, ElementRef, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Iproduct } from '../../models/iproduct';
import { SharProductsService } from '../../services/shar-products.service';
import { ShoppingCartComponent } from '../shopping-cart/shopping-cart.component';
import { Router, RouterLink } from '@angular/router';


@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, ShoppingCartComponent,RouterLink],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  products: Iproduct[];
  filterProducts: Iproduct[] = [];
  @Output() onUserClickedBuy = new EventEmitter<Iproduct>();
  @Output() onUserClickedBuy2 = new EventEmitter<string>();
  @Input() getCatID: number = Number();

  constructor(private prodService: SharProductsService, private router: Router) {
    this.products = this.prodService.getAllProducts();
  }
  ngOnChanges() {
    this.products = this.getCatID == 0 ? this.products : this.prodService.getProductsByCatID(this.getCatID);
  }
  buy(item: Iproduct, count: string) {
    this.onUserClickedBuy2.emit(count);
    this.onUserClickedBuy.emit(item);
  }

}
