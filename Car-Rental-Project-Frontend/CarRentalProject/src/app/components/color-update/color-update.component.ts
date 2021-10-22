import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Color } from 'src/app/models/Color';

import { ColorService } from 'src/app/services/color.service';


@Component({
  selector: 'app-color-update',
  templateUrl: './color-update.component.html',
  styleUrls: ['./color-update.component.css']
})
export class ColorUpdateComponent implements OnInit {

  colorUpdateForm:FormGroup
  color:Color[]
  
  constructor(private colorService:ColorService,
    
    private toastrService:ToastrService,
    private activatedRoute:ActivatedRoute,
    private formBuilder:FormBuilder
    
    
    
    ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      params=>{
        if (params["colorID"]) {
          this.colorService.getColorByColorId(params["colorID"])
          
        }
      }
    )
    this.createColorUpdateForm()
    
  }

  getColorByColorId(colorID:number){
    this.colorService.getColorByColorId(colorID).subscribe(
      response=>{
        this.color=response.data
      }
    )

  }
  createColorUpdateForm(){
    this.colorUpdateForm=this.formBuilder.group({
      colorID:["",Validators.required],
      colorName:["",Validators.required]

    })

  }
  update(){
    let colorModel=Object.assign({},this.colorUpdateForm.value)
    if (this.colorUpdateForm.valid) {
      this.colorService.updateColor(colorModel).subscribe(

        response=>{
          this.toastrService.success("Renk Basariyla Guncellendi")
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
