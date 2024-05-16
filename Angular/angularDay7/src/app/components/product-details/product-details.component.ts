import { Component } from '@angular/core';
import { SharProductsService } from '../../services/shar-products.service';
import { Iproduct } from '../../models/iproduct';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../../services/api.service';


@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent {

  // produect: Iproduct | undefined ;
  // produectsID: number[] = [];
  // currentID: number = 0;
  // constructor(private prodService: SharProductsService, private activRoute: ActivatedRoute, private router: Router) { }
  // ngOnInit() {
  //   this.activRoute.paramMap.subscribe((params) => {
  //     this.currentID = Number(params.get("id"));
  //     this.produect = this.prodService.getProductByID(this.currentID);
  //   });
  // }


  // next() {
  //   this.produectsID = this.prodService.getProductIDs();
  //   let index = this.produectsID.indexOf(this.currentID);
  //   this.currentID = this.produectsID[++index];
  //   this.router.navigate(['/Details', this.currentID]);

  // }
  // Previeous() {
  //   this.produectsID = this.prodService.getProductIDs();
  //   let index = this.produectsID.indexOf(this.currentID);
  //   this.currentID = this.produectsID[--index];
  //   this.router.navigate(['/Details', this.currentID]);

  // }
  // goPrevieousPage() {
  //   this.router.navigate(['/Home']);
  // }
}
