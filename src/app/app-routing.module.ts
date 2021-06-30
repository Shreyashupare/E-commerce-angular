import { UsersComponent } from './users/users.component';
import { user } from './user/user';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { InventoryComponent } from './inventory/inventory.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { ProfileComponent } from './profile/profile.component';

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
  },
  {
    path:"users",
    component:UsersComponent
  },
  {
    path:"cart",
    component:CartComponent
  },
  {
    path:"profile",
    component:ProfileComponent
  },
  {
    path:"**",
    component:PagenotfoundComponent
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
