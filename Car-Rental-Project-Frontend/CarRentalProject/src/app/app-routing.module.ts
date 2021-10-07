import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarAddComponent } from './components/car-add/car-add.component';

import { CarDetailComponent } from './components/car-detail/car-detail.component';

import { CarComponent } from './components/car/car.component';
import { CartComponent } from './components/cart/cart.component';
import { RentComponent } from './components/rent/rent.component';

import { RentalComponent } from './components/rental/rental.component';


const routes: Routes = [
  {path:"",pathMatch:"full",component:CarComponent},
  {path:"cars",pathMatch:"full",component:CarComponent},
  {path:"cars/brand/:brandID",component:CarComponent},
  {path:"cars/color/:colorID",component:CarComponent},
  {path:"car-detail",pathMatch:"full",component:CarDetailComponent},
  {path:"cars/car-detail/:carID",pathMatch:"full",component:CarDetailComponent},
  {path:"cars/brand/:brandName/color/:colorName",pathMatch:"full",component:CarComponent},
  {path:"cars/rent/:carID",pathMatch:"full",component:RentComponent},
  {path:"cart",component:CartComponent},
  {path:"car-detail/rent/:carID",pathMatch:"full",component:RentComponent},
  {path:"cars/add",component:CarAddComponent}
 
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
