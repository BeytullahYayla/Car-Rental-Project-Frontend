import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrandComponent } from './components/brand/brand.component';
import { CarDetailComponent } from './components/car-detail/car-detail.component';

import { CarComponent } from './components/car/car.component';


const routes: Routes = [
  {path:"",pathMatch:"full",component:CarComponent},
  {path:"cars",pathMatch:"full",component:CarComponent},
  {path:"cars/brand/:brandID",component:CarComponent},
  {path:"cars/color/:colorID",component:CarComponent},
  {path:"car-detail",pathMatch:"full",component:CarDetailComponent},
  {path:"cars/car-detail/:carID",pathMatch:"full",component:CarDetailComponent},
  {path:"cars/brand/:brandName/color/:colorName",pathMatch:"full",component:CarComponent}
 
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
