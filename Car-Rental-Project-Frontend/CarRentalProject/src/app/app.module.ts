import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { FormsModule,ReactiveFormsModule,FormBuilder,FormControl,Validators } from '@angular/forms';
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

import { CartSummaryComponent } from './components/cart-summary/cart-summary.component';
import { CartComponent } from './components/cart/cart.component';
import { CartAddComponent } from './components/cart-add/cart-add.component';
import { TotalPricePipePipe } from './pipes/total-price-pipe.pipe';
import { RentComponent } from './components/rent/rent.component';
import { PaymentComponent } from './components/payment/payment.component';
import { CarAddComponent } from './components/car-add/car-add.component';








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
   
    CartSummaryComponent,
    CartComponent,
    CartAddComponent,
    TotalPricePipePipe,
    RentComponent,
    PaymentComponent,
    CarAddComponent,
  
     
  
    
   
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
    ReactiveFormsModule
   
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
