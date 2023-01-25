import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ActionComponent } from './pages/action/action.component';
import { RollsComponent } from './pages/rolls/rolls.component';
import { SetsComponent } from './pages/sets/sets.component';
import { DrinksComponent } from './pages/drinks/drinks.component';
import { SaucesComponent } from './pages/sauces/sauces.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { PaymentAndDeliveryComponent } from './pages/payment-and-delivery/payment-and-delivery.component';
import { AboutComponent } from './pages/about/about.component';
import { BasketComponent } from './pages/basket/basket.component';

import { ActionsComponent } from './admin/actions/actions.component';
import { CategoryComponent } from './admin/category/category.component';
import { ProductsComponent } from './admin/products/products.component';
import { OrdersComponent } from './admin/orders/orders.component';
import { AdminComponent } from './admin/admin.component';

const routes: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'action', component: ActionComponent },
  { path: 'rolls', component: RollsComponent },
  { path: 'sets', component: SetsComponent },
  { path: 'drinks', component: DrinksComponent },
  { path: 'souces', component: SaucesComponent },
  { path: 'paiment.delivery', component: PaymentAndDeliveryComponent },
  { path: 'about', component: AboutComponent },
  { path: 'basket', component: BasketComponent },
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      { path: 'actions', component: ActionsComponent },
      { path: 'category', component: CategoryComponent },
      { path: 'orders', component: OrdersComponent },
      { path: 'products', component: ProductsComponent },
      { path: '', pathMatch: 'full', redirectTo: 'actions' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
