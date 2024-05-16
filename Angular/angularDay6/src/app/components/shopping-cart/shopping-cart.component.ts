import { Component } from '@angular/core';
import { SharProductsService } from '../../services/shar-products.service';
import { Iproduct } from '../../models/iproduct';

@Component({
  selector: 'app-shopping-cart',
  standalone: true,
  imports: [],
  templateUrl: './shopping-cart.component.html',
  styleUrl: './shopping-cart.component.css'
})
export class ShoppingCartComponent {
  // oneProdById:Iproduct|undefined;
  // someProdByCatID:Iproduct[];
  // constructor(private prodService:SharProductsService){
  //   this.oneProdById = this.prodService.getProductByID(100);
  //   this.someProdByCatID = this.prodService.getProductsByCatID(1);
  // }
}
