import { Injectable } from '@angular/core';
import { Iproduct } from '../models/iproduct';

@Injectable({
  providedIn: 'root'
})
export class SharProductsService {
  // products:Iproduct[];
  constructor() { 
    // this.products = [
    //   {
    //     id: 100,
    //     name: 'Iphone',
    //     quantity: 1,
    //     price: 50000,
    //     imgUrl: 'https://fakeimg.pl/200x100/',
    //     catId: 1,
    //     orderCount: 0
    //   },
    //   {
    //     id: 200,
    //     name: 'Dell Laptop',
    //     quantity: 5,
    //     price: 15000,
    //     imgUrl: 'https://fakeimg.pl/200x100/',
    //     catId: 2,
    //     orderCount: 0
    //   },
    //   {
    //     id: 300,
    //     name: 'Samsung Tablet',
    //     quantity: 0,
    //     price: 5000,
    //     imgUrl: 'https://fakeimg.pl/200x100/',
    //     catId: 3,
    //     orderCount: 0
    //   },
    //   {
    //     id: 400,
    //     name: 'Oppo',
    //     quantity: 4,
    //     price: 800,
    //     imgUrl: 'https://fakeimg.pl/200x100/',
    //     catId: 1,
    //     orderCount: 0
    //   },
    //   {
    //     id: 500,
    //     name: 'HP Laptop',
    //     quantity: 1,
    //     price: 50000,
    //     imgUrl: 'https://fakeimg.pl/200x100/',
    //     catId: 2,
    //     orderCount: 0
    //   },
    //   {
    //     id: 600,
    //     name: 'Hawaui Tablet',
    //     quantity: 3,
    //     price: 700,
    //     imgUrl: 'https://fakeimg.pl/200x100/',
    //     catId: 3,
    //     orderCount: 0
    //   },
    // ];
  }}

//   getAllProducts(){
//     return this.products;
//   }
//   getProductsByCatID(id:number):Iproduct[] 
//   {
//     return this.products.filter(prds=>prds.catId==id);
//   }
//   getProductByID(id:number):Iproduct|undefined
//   {
//     return this.products.find(prd=>prd.id==id);
//   }
//   getProductIDs():number[]
//   {
//     return this.products.map(product => product.id);
//   }
// }
