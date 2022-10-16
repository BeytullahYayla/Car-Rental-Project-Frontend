import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validator, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Brand } from 'src/app/models/Brand';
import { BrandService } from 'src/app/services/brand.service';
import { CarUpdateComponent } from '../car-update/car-update.component';

@Component({
  selector: 'app-brand-update',
  templateUrl: './brand-update.component.html',
  styleUrls: ['./brand-update.component.css']
})
export class BrandUpdateComponent implements OnInit {
  brandUpdateForm:FormGroup
  brand:Brand[]

  constructor(
    private brandService:BrandService,
    private toastrService:ToastrService,
    private activatedRoute:ActivatedRoute,
    private formBuilder:FormBuilder
    ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      params=>{
        if (params["id"]) {
          this.getBrandsByBrandId(params["id"])
        }
      }
    )
    this.createBrandUpdateForm()
  }

  getBrandsByBrandId(brandID:number){
    this.brandService.getBrandsByBrandId(brandID).subscribe(
      response=>{
          this.brand=response.data
      }
    )
  }
  createBrandUpdateForm(){
    this.brandUpdateForm=this.formBuilder.group({

      brandID:["",Validators.required],
      brandName:["",Validators.required]

    })
  }
  update(){
    let carModel=Object.assign({},this.brandUpdateForm.value)
    
    if (this.brandUpdateForm.valid) {
          this.brandService.update(carModel).subscribe(
            response=>{
              this.toastrService.success("CaMarka Başarıyla Güncellendi")

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
  
  
  
    

  


