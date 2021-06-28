import { InventoryComponent } from './inventory/inventory.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:"login",
    component:LoginComponent
  },
  {
    path:"registration",
    component:RegisterComponent
  },
  {
    path:"products",
    component:ProductlistComponent
  },
  {
    path:"inventory",
    component:InventoryComponent
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
