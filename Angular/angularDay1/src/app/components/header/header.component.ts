import { Component } from '@angular/core';
import { Store } from "./../../models/store";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  Mystore = new Store("mobile", ["cario", "mansoura", "tanta"], "/assets/image/content.jpg");
}
