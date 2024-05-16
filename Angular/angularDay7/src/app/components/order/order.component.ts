import { Component, ElementRef, Input, Output, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Icategory } from '../../models/icategory';
import { FormsModule } from '@angular/forms';
import { ProductsComponent } from '../products/products.component';
import { ProcessCreditCardPipe } from '../../pipes/process-credit-card.pipe';
import { ProcessIDPipe } from '../../pipes/process-id.pipe';
import { Iproduct } from '../../models/iproduct';
import { AdsObsService } from '../../services/ads-obs.service';
import { ApiService } from '../../services/api.service';
import { Subscription } from 'rxjs/internal/Subscription';


@Component({
  selector: 'app-order',
  standalone: true,
  imports: [CommonModule, FormsModule, ProductsComponent, ProcessCreditCardPipe, ProcessIDPipe],
  templateUrl: './order.component.html',
  styleUrl: './order.component.css'
})
export class OrderComponent {
  categories: Icategory[] = [] as Icategory[];
  selectedCatId: number = Number();
  subscription: Subscription = new Subscription();
  @ViewChild("tableRow") table!: ElementRef;
  @Input() recivedCount: number = Number();
  @Input() recivedItem: Iproduct[] = [] as Iproduct[];


  constructor(private adsService:AdsObsService, private apiService:ApiService) {
    this.apiService.getAllCategories().subscribe((data) =>{
      this.categories = data;
    });
  }

  getItem(data: Iproduct) {
    let itemIndex = -1;
    this.recivedItem.forEach((item, index) => {
      if (item.id == data.id) {
        itemIndex = index;
      }
    });

    if (itemIndex == -1) {
      data.orderCount = this.recivedCount
      this.recivedItem.push(data);
    } else {
      this.recivedItem[itemIndex].orderCount += this.recivedCount;
    }
  }
  getCount(count: string) {
    let numberCount = Number(count);
    this.recivedCount = (numberCount) ? numberCount : 1;
  }
  removeItem(id: string) {
    this.recivedItem.forEach((item, index) => {
      if (item.id == id) {
        this.recivedItem[index].orderCount = 0;
        this.recivedItem.splice(index, 1);
      }
    })

  }
  checkOut() {
    this.recivedItem.forEach((item) => {
      item.quantity -= item.orderCount;
      this.table.nativeElement.innerHTML = "";
    })
  }

  ngOnInit()
  {
    this.subscription=this.adsService.nextAds().subscribe({
      next:(item) =>console.log(item)
    });
  }
  ngOnDestroy()
  {
    this.subscription.unsubscribe();
  }
}
