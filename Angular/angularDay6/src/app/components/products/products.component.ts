import { Component, ElementRef, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Iproduct } from '../../models/iproduct';
import { ShoppingCartComponent } from '../shopping-cart/shopping-cart.component';
import { Router, RouterLink } from '@angular/router';
import { ApiService } from '../../services/api.service';



@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, ShoppingCartComponent,RouterLink],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  products: Iproduct[]= [] as Iproduct[];
  filterProducts: Iproduct[] = [] as Iproduct[];
  @Input() getCatID: number = Number();
  @Output() onUserClickedBuy = new EventEmitter<Iproduct>();
  @Output() onUserClickedBuy2 = new EventEmitter<string>();

  constructor(private apiService: ApiService,private router: Router) {
    this.apiService.getAllProducts().subscribe((data) =>{
      this.products = data;
    });

  }
  ngOnChanges() {
    this.apiService.getProductsBycatId(this.getCatID).subscribe((data) =>{
      this.filterProducts = data;
      this.products = this.getCatID == 0 ? this.products : this.filterProducts;
    })
  }
  buy(item: Iproduct, count: string) {
    this.onUserClickedBuy2.emit(count);
    this.onUserClickedBuy.emit(item);
  }
  deleteProduct(id:string)
  {
    // console.log(id);
    if (confirm('Are you sure')){
      this.apiService.deleteProduct(id).subscribe(() => {
        this.ngOnChanges();
        this.router.navigate(['/Home']);
      });
    }
  }
  updateProducte(id:string)
  {
    this.router.navigate(['/admin/insertProduct', id]);
  }

}
