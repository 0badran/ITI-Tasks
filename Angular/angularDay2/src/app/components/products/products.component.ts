import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Iproduct } from '../../models/iproduct';
import { Icategory } from '../../models/icategory';
import { CardChangeDirective } from '../../directives/card-change.directive';


@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, FormsModule, CardChangeDirective],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  products: Iproduct[];
  categories: Icategory[];
  selectedCatId: number = Number();
  // totalOrderPrice: number = Number();

  constructor() {
    this.products = [
      {
        id: 100,
        name: 'Iphone',
        quantity: 1,
        price: 50000,
        imgUrl: 'https://fakeimg.pl/200x100/',
        catId: 1,
      },
      {
        id: 200,
        name: 'Dell Laptop',
        quantity: 5,
        price: 15000,
        imgUrl: 'https://fakeimg.pl/200x100/',
        catId: 2,
      },
      {
        id: 300,
        name: 'Samsung Tablet',
        quantity: 0,
        price: 5000,
        imgUrl: 'https://fakeimg.pl/200x100/',
        catId: 3,
      },
      {
        id: 400,
        name: 'Oppo',
        quantity: 4,
        price: 800,
        imgUrl: 'https://fakeimg.pl/200x100/',
        catId: 1,
      },
      {
        id: 500,
        name: 'HP Laptop',
        quantity: 1,
        price: 50000,
        imgUrl: 'https://fakeimg.pl/200x100/',
        catId: 2,
      },
      {
        id: 600,
        name: 'Hawaui Tablet',
        quantity: 3,
        price: 700,
        imgUrl: 'https://fakeimg.pl/200x100/',
        catId: 3,
      },
    ];

    this.categories = [
      { id: 1, name: "Mobiles" },
      { id: 2, name: "Laptop" },
      { id: 3, name: "Tablet" }
    ]
  }
  buy(item: any) {
    --item.quantity;
  }
  restCategories() {
    this.selectedCatId = 0;
  }
}
