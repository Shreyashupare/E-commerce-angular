import { AmazondataService } from './amazondata.service';
import { ProductsdataService } from './productsdata.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RegisterComponent } from './register/register.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { InventoryComponent } from './inventory/inventory.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ChangevalueComponent } from './changevalue/changevalue.component';
import { HttpClientModule} from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    RegisterComponent,
    ProductlistComponent,
    InventoryComponent,
    PagenotfoundComponent,
    ChangevalueComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ProductsdataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
