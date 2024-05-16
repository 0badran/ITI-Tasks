import { Component, ElementRef, ViewChild } from '@angular/core';
import { Icategory } from '../../models/icategory';
import { ApiService } from '../../services/api.service';
import { FormGroup, FormsModule, NgForm } from '@angular/forms';
import { Iproduct } from '../../models/iproduct';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css'
})
export class AddProductComponent {
  gategories: Icategory[] = [] as Icategory[];
  product: Iproduct = {} as Iproduct;
  id: string | null;
  @ViewChild("addProForm") producteForm!: FormGroup;
  constructor(private apiService: ApiService, private ar: ActivatedRoute, private router: Router) {
    this.apiService.getAllCategories().subscribe(res => {
      this.gategories = res;
    });
    this.id = null;
  }
  ngAfterViewInit() {
    this.ar.paramMap.subscribe((params) => {
      this.id = params.get("id");
      if (this.id !== '0') {
        console.log("inside if");
        this.apiService.getProductById(this.id).subscribe((product) => {
          this.product = product;
          this.producteForm.setValue(this.product);
        });
      }

    });
  }


  addNewProduct() {
    if (this.id !== '0') {
      console.log("iam update product");
      this.apiService.updateProduct(this.product, this.id).subscribe(() => {
        this.ngAfterViewInit();
      });
    } else {
      console.log("iam new product");

      this.apiService.addNewProduct(this.product).subscribe(() => {
        this.ngAfterViewInit();
      });
    }
    this.router.navigate(['/Home']);
  }
}

