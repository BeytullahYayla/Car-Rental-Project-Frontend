import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { ToastrService } from 'ngx-toastr';
import { Car } from 'src/app/models/car';
import { CarDetail } from 'src/app/models/car-detail';
import { CarService } from 'src/app/services/car.service';


@Component({
  selector: 'app-car-update',
  templateUrl: './car-update.component.html',
  styleUrls: ['./car-update.component.css']
})
export class CarUpdateComponent implements OnInit {

  carUpdateForm:FormGroup
  car:Car[]

  constructor(
    private formBuilder:FormBuilder,
    private carService:CarService,
    private toastrService:ToastrService,
    private activatedRoute:ActivatedRoute


  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      params=>{
        if (params["carID"]) {
          this.getCarByCarId(params["carID"])
        }
      }
    )
    this.createCarUpdateForm()
  }

  createCarUpdateForm(){
    this.carUpdateForm=this.formBuilder.group({
      carID:["",Validators.required],
      brandID:["",Validators.required],
      colorID:["",Validators.required],
      modelYear:["",Validators.required],
      dailyPrice: ["",Validators.required],
      description: ["",Validators.required]
    })

  }
  getCarByCarId(carID:number){
    this.carService.getCarsByCarId(carID).subscribe(
      response=>{
        this.car=response.data
      }
    )

  }
  update(){
    let carModel=Object.assign({},this.carUpdateForm.value)
    
    if (this.carUpdateForm.valid) {
          this.carService.update(carModel).subscribe(
            response=>{
              this.toastrService.success("Car Successfully Updated")

            },
            responseError=>{
              if (responseError.error.Errors.length>0) {
                for (let i = 0; i < responseError.error.Errors.length; i++) {
                  this.toastrService.error(responseError.error.Errors[i].ErrorMessage,"Doğrulama Hatası")
                  
                }
                
              }
              
            }
            
          )  
    }
    else{
      this.toastrService.error("Form eksik")
    }
    
   

  }
}


