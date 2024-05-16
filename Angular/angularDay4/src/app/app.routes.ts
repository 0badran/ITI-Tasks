import { Routes } from '@angular/router';
import { OrderComponent } from './components/order/order.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContectUsComponent } from './components/contect-us/contect-us.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';

export const routes: Routes = [
  {path:"", redirectTo:"Home", pathMatch:"full"},
  {path:"Home", component: OrderComponent},
  {path:"About", component: AboutUsComponent},
  {path:"Contact", component: ContectUsComponent},
  {path:"Details/:id", component: ProductDetailsComponent},
  {path:"**", component: NotFoundComponent},
];
