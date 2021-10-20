import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Brand } from 'src/app/models/Brand';
import { CarDetail } from 'src/app/models/car-detail';
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

  cars:CarDetail[]
  brands:Brand[]
  colors:Color[]

  constructor(private carService:CarService,
    private colorService:ColorService,
    private brandService:BrandService,
    private toastrService:ToastrService,
    private activatedRoute:ActivatedRoute
    
    ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      params=>{
        if (params["carID"]) {
          this.getCarById(params["carID"])
        }
      }
    )
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
  deleteCar(car:CarDetail){
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
  getCarById(carID:number){
    
    this.carService.getCarsByCarId(carID).subscribe(
      response=>{
        this.cars=response.data
      }
    )

  }
  

}
