import { Routes } from '@angular/router';
import { OrderComponent } from './components/order/order.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContectUsComponent } from './components/contect-us/contect-us.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { LoginComponent } from './components/login/login.component';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [

  { path: "", redirectTo: "login", pathMatch: "full" },
  { path: "Home", component: OrderComponent, canActivate: [authGuard] },
  { path: "About", component: AboutUsComponent },
  { path: "Contact", component: ContectUsComponent },
  { path: "Details/:id", component: ProductDetailsComponent },
  { path: "login", component: LoginComponent },
  { path: "**", component: NotFoundComponent },
];
