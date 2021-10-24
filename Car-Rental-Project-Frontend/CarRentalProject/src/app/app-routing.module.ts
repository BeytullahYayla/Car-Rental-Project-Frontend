import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrandAddComponent } from './components/brand-add/brand-add.component';
import { BrandUpdateComponent } from './components/brand-update/brand-update.component';
import { CarAddComponent } from './components/car-add/car-add.component';

import { CarDetailComponent } from './components/car-detail/car-detail.component';
import { CarUpdateComponent } from './components/car-update/car-update.component';

import { CarComponent } from './components/car/car.component';
import { CartComponent } from './components/cart/cart.component';
import { ColorAddComponent } from './components/color-add/color-add.component';
import { ColorUpdateComponent } from './components/color-update/color-update.component';
import { LoginComponent } from './components/login/login.component';
import { ManangementComponent } from './components/manangement/manangement.component';
import { RentComponent } from './components/rent/rent.component';

import { RentalComponent } from './components/rental/rental.component';
import { LoginGuard } from './guards/login.guard';


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
  {path:"cars/add",component:CarAddComponent,canActivate:[LoginGuard]},
  {path:"cars/manangement",component:ManangementComponent},
  {path:"brands/add",component:BrandAddComponent},
  {path:"colors/add",component:ColorAddComponent},
  {path:"cars/update/:carID",component:CarUpdateComponent},
  {path:"brands/update/:brandID",component:BrandUpdateComponent},
  {path:"colors/update/:colorID",component:ColorUpdateComponent},
  {path:"login",component:LoginComponent}
 
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
