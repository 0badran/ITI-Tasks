import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-dailog',
  standalone: true,
  imports: [],
  templateUrl: './home-dailog.component.html',
  styleUrl: './home-dailog.component.css'
})
export class HomeDailogComponent {
  constructor(public dialogRef: MatDialogRef<HomeDailogComponent>, @Inject(MAT_DIALOG_DATA) public data: any, public router:Router) {
    setTimeout(() => {
      this.dialogRef.close();
      this.router.navigateByUrl("/login");
    }, 5000);
  }
}
