import { Component, ElementRef, Input, Output, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Icategory } from '../../models/icategory';
import { FormsModule } from '@angular/forms';
import { ProductsComponent } from '../products/products.component';
import { ProcessCreditCardPipe } from '../../pipes/process-credit-card.pipe';
import { ProcessIDPipe } from '../../pipes/process-id.pipe';
import { Iproduct } from '../../models/iproduct';
import { AdsObsService } from '../../services/ads-obs.service';


@Component({
  selector: 'app-order',
  standalone: true,
  imports: [CommonModule, FormsModule, ProductsComponent, ProcessCreditCardPipe, ProcessIDPipe],
  templateUrl: './order.component.html',
  styleUrl: './order.component.css'
})
export class OrderComponent {
  id: string = "29902071202359";
  creditCard: string = "7387387187384812";
  categories: Icategory[];
  @ViewChild("tableRow") table!: ElementRef;

  @Input() recivedCount: number = Number();
  @Input() recivedItem: Iproduct[] = [];
  selectedCatId: number = Number();


  constructor(private adsService:AdsObsService) {
    this.categories = [
      { id: 1, name: "Mobiles" },
      { id: 2, name: "Laptop" },
      { id: 3, name: "Tablet" }
    ]
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
  removeItem(id: number) {
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
    this.adsService.nextAds().subscribe({
      next:(item) =>console.log(item)
    });
  }
}
