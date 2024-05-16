import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Iproduct } from '../../models/iproduct';


@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  products: Iproduct[];
  @Output() onUserClickedBuy = new EventEmitter<Iproduct>();
  @Output() onUserClickedBuy2 = new EventEmitter<string>();
  @Input() getGetId: number = Number();

  constructor() {
    this.products = [
      {
        id: 100,
        name: 'Iphone',
        quantity: 1,
        price: 50000,
        imgUrl: 'https://fakeimg.pl/200x100/',
        catId: 1,
        orderCount: 0
      },
      {
        id: 200,
        name: 'Dell Laptop',
        quantity: 5,
        price: 15000,
        imgUrl: 'https://fakeimg.pl/200x100/',
        catId: 2,
        orderCount: 0
      },
      {
        id: 300,
        name: 'Samsung Tablet',
        quantity: 0,
        price: 5000,
        imgUrl: 'https://fakeimg.pl/200x100/',
        catId: 3,
        orderCount: 0
      },
      {
        id: 400,
        name: 'Oppo',
        quantity: 4,
        price: 800,
        imgUrl: 'https://fakeimg.pl/200x100/',
        catId: 1,
        orderCount: 0
      },
      {
        id: 500,
        name: 'HP Laptop',
        quantity: 1,
        price: 50000,
        imgUrl: 'https://fakeimg.pl/200x100/',
        catId: 2,
        orderCount: 0
      },
      {
        id: 600,
        name: 'Hawaui Tablet',
        quantity: 3,
        price: 700,
        imgUrl: 'https://fakeimg.pl/200x100/',
        catId: 3,
        orderCount: 0
      },
    ];
  }
  buy(item: Iproduct, count: string) {
    this.onUserClickedBuy2.emit(count);
    this.onUserClickedBuy.emit(item);
  }
}
