import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarComponent } from './components/car/car.component';
import { NavComponent } from './components/nav/nav.component';
import { BrandComponent } from './components/brand/brand.component';
import { ColorComponent } from './components/color/color.component';
import { RentalComponent } from './components/rental/rental.component';
import { CustomerComponent } from './components/customer/customer.component';
import { ToastrModule } from 'ngx-toastr';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations"

import { CarDetailComponent } from './components/car-detail/car-detail.component';

import { FilterColorPipePipe } from './pipes/filter-color-pipe.pipe';
import { FilterCarmodelPipePipe } from './pipes/filter-carmodel-pipe.pipe';
import { RentalAddComponent } from './components/rental-add/rental-add.component';
import { CartSummaryComponent } from './components/cart-summary/cart-summary.component';
import { CartComponent } from './components/cart/cart.component';
import { CartAddComponent } from './components/cart-add/cart-add.component';
import { TotalPricePipePipe } from './pipes/total-price-pipe.pipe';







@NgModule({
  declarations: [
    AppComponent,
    CarComponent,
    NavComponent,
    BrandComponent,
    ColorComponent,
    RentalComponent,
    CustomerComponent,
   
    FilterColorPipePipe,
    FilterCarmodelPipePipe,
    CarDetailComponent,
    RentalAddComponent,
    CartSummaryComponent,
    CartComponent,
    CartAddComponent,
    TotalPricePipePipe,
     
  
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ToastrModule.forRoot({
      positionClass:"toast-bottom-right"
    }),
    BrowserAnimationsModule,
   
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
