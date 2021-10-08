import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Brand } from 'src/app/models/Brand';
import { Car } from 'src/app/models/Car';
import { Color } from 'src/app/models/Color';
import { BrandService } from 'src/app/services/brand.service';
import { CarService } from 'src/app/services/car.service';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-manangement',
  templateUrl: './manangement.component.html',
  styleUrls: ['./manangement.component.css']
})
export class ManangementComponent implements OnInit {

  cars:Car[]
  brands:Brand[]
  colors:Color[]

  constructor(private carService:CarService,
    private colorService:ColorService,
    private brandService:BrandService,
    private toastrService:ToastrService,
    
    ) { }

  ngOnInit(): void {
    this.ListAllCars()
    this.ListAllBrands()
    this.ListAllColors()
  }
  ListAllCars(){
    this.carService.getCars().subscribe(
      response=>{
        this.cars=response.data
      }
    )
  }
  ListAllBrands(){
    this.brandService.getBrands().subscribe(
      response=>{
        this.brands=response.data
      }
    )
  }
  ListAllColors(){
    this.colorService.getColors().subscribe(
      response=>{
        this.colors=response.data
      }
    )
  }
  deleteCar(car:Car){
    this.carService.delete(car).subscribe(
      response=>{
        this.toastrService.success(car.brandName,"Başarıyla Silindi")
        window.location.reload()
      },
      responseError=>{
        this.toastrService.error("Bir hata meydana geldi")
      }
    )
  }
  deleteColor(color:Color){
    this.colorService.deleteColor(color).subscribe(
      response=>{
        this.toastrService.success(color.colorName,"Başarıyla Silindi")
        window.location.reload()
      },
      responseError=>{
        this.toastrService.error("Bir hata meydana geldi")
      }
    )

  }
  deleteBrand(brand:Brand){
    this.brandService.deleteBrand(brand).subscribe(
      response=>{
        this.toastrService.success(brand.brandName,"Başarıyla Silindi")
        window.location.reload()
      },
      responseError=>{
        this.toastrService.error("Bir hata meydana geldi")
      }
      
    )
  }
  

}
