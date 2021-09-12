import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarComponent } from './components/car/car.component';
import { NavComponent } from './components/nav/nav.component';
import { BrandComponent } from './components/brand/brand.component';
import { ColorComponent } from './components/color/color.component';
import { RentalComponent } from './components/rental/rental.component';
import { CustomerComponent } from './components/customer/customer.component';
import { FilterBrandPipePipe } from './pipes/filter-brand-pipe.pipe';
import { FilterCarmodelPipePipe } from './pipes/filter-carmodel-pipe.pipe';
import { FilterColorPipePipe } from './pipes/filter-color-pipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CarComponent,
    NavComponent,
    BrandComponent,
    ColorComponent,
    RentalComponent,
    CustomerComponent,
    FilterBrandPipePipe,
    FilterCarmodelPipePipe,
    FilterColorPipePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
