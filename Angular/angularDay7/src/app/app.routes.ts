import { Routes } from '@angular/router';
import { OrderComponent } from './components/order/order.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContectUsComponent } from './components/contect-us/contect-us.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { LoginComponent } from './components/login/login.component';
import { authGuard } from './guards/auth.guard';
import { AddProductComponent } from './components/add-product/add-product.component';
import { RegisterComponent } from './components/register/register.component';

export const routes: Routes = [
  { path: "", redirectTo: "login", pathMatch: "full" },
  { path: "Home", component: OrderComponent, canActivate: [authGuard] },
  { path: "About", component: AboutUsComponent },
  { path: "Contact", component: ContectUsComponent },
  { path: "admin/insertProduct/:id", component: AddProductComponent, canActivate: [authGuard] },
  { path: "Details/:id", component: ProductDetailsComponent },
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent },
  { path: "**", component: NotFoundComponent },
];
