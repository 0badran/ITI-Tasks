import { Component } from '@angular/core';
import { IProduct } from "./../../models/iproduct";
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  myProduct:IProduct;
  constructor()
  {
    this.myProduct = {id:2,name:"phone", quantity:3,price:1500,img:"/assets/image/banar.png",cateogryID:4}
  }
}
