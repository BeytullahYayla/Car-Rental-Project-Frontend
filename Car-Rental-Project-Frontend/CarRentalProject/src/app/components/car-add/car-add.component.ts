import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,FormControl,Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

import { CarService } from 'src/app/services/car.service';
@Component({
  selector: 'app-car-add',
  templateUrl: './car-add.component.html',
  styleUrls: ['./car-add.component.css']
})
export class CarAddComponent implements OnInit {

  carAddForm:FormGroup;
 

  constructor(private formBuilder:FormBuilder,
    private carService:CarService,
    private toastrService:ToastrService
    
    ) { }

  ngOnInit(): void {
    this.createCarAddForm()
  }
  createCarAddForm(){
    this.carAddForm=this.formBuilder.group({
      brandName:["",Validators.required],
      colorName:["",Validators.required],
      brandID:["",Validators.required],
      colorID:["",Validators.required],
      modelYear:["",Validators.required],
      description:["",Validators.required],
      dailyPrice:["",Validators.required]
     

    })
  }
  add(){
   
  
   if (this.carAddForm.valid) {
    let carModel=Object.assign({},this.carAddForm.value)
     this.carService.add(carModel).subscribe(
       response=>{
         console.log(response.message)
         this.toastrService.success("Basariyla Eklendi")
       },responseError=>{
         if (responseError.error.Errors.length>0) {
           for (let i = 0; i < responseError.error.Errors.length; i++) {
                this.toastrService.error(responseError.error.Errors[i].ErrorMessage,"Doğrulama Hatası")
             
           }

           
         }
       }
      
       
     )
   }
   else{
     this.toastrService.error("Form Eksik")
   }
    
  
   
  }

}
