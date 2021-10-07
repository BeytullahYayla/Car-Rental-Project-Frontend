import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/models/Car';
import { HttpClient } from  '@angular/common/http';
import { CarResponseModel } from 'src/app/models/carResponseModel';
import { CarService } from 'src/app/services/car.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ElementSchemaRegistry } from '@angular/compiler';
import { CarImageService } from 'src/app/services/car-image.service';
import { BrandService } from 'src/app/services/brand.service';
import { ColorService } from 'src/app/services/color.service';
import { Brand } from 'src/app/models/Brand';
import { Color } from 'src/app/models/Color';
import { ToastrService } from 'ngx-toastr';
import { CartService } from 'src/app/services/cart.service';



@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {
  
  
 
  // carResponseModel:CarResponseModel={
  //   data:this.cars,
  //   message:"",
  //   success:true
  // }
  dataLoaded=false;
  constructor(private carService:CarService,
    private activatedRoute:ActivatedRoute,
    private carImageService:CarImageService,
    private brandService:BrandService,
    private colorService:ColorService,
    private router:Router,
    private toasterService:ToastrService,
    private cartService:CartService
    
    
    ) { }
  cars:Car[]=[]
  brands:Brand[]=[]
  colors:Color[]=[]

 filterBrandName:string=""
 filterColorName:string=""

 

  imgUrl: string = 'https://localhost:44341/';
  defaultImage = 'default.jpg';

  ngOnInit(): void {
    this.getColors();
    this.getBrands();
    
    this.activatedRoute.params.subscribe(
      params=>{
        
        
         if (params["brandName"] && params["colorName"]) {
          this.getCarsByBrandAndColorName(params["brandName"],params["colorName"])
        }
        else if (params["brandName"]) {
          this.getCarsByBrandName(params["brandName"])
          
        }
        else if (params["brandID"]) {
          this.getCarsByBrand(params["brandID"])
        }
        else if (params["colorID"]) {
          this.getCarsByColor(params["colorID"])
        }
        else{
          this.getCars()
        }
     
      }
    )
    
  }
  getCars(){
      this.carService.getCars().subscribe(response=>{
        this.cars=response.data;
        this.dataLoaded=true;
      })
  }
  getCarsByBrandName(brandName:string){
    this.carService.getCarsByBrandName(brandName).subscribe(
      response=>{
        this.cars=response.data;
      }
    )
  }
  getCarsByColorName(colorName:string){
    this.carService.getCarsByColorName(colorName).subscribe(
      response=>{
        this.cars=response.data;
      }
    )
  }
  getCarsByBrandAndColorName(brandName:string,colorName:string){
    this.carService.getCarsByBrandAndColorName(brandName,colorName).subscribe(
      response=>{
        this.cars=response.data;
      }
    )

  }
  getCarsByBrand(brandID:number){
    this.carService.getCarsByBrand(brandID).subscribe(
      response=>{
        this.cars=response.data;
      }
    )
  }
  getCarsByColor(colorID:number){
    this.carService.getCarsByColor(colorID).subscribe(
      response=>{
        this.cars=response.data;
      }
    )
  }
  getImagePath(imagePath:string){
    this.carImageService.getImagePath(imagePath);
  }
  getBrands(){
    this.brandService.getBrands().subscribe(
      response=>{
        this.brands=response.data;
      }
    )
  }
  getColors(){
    this.colorService.getColors().subscribe(
      response=>{
        this.colors=response.data;
      }
    )
  }
 
  getSelectedBrand(brandName:string){
    if (this.filterBrandName==brandName) {
      return true
    }
    else{
      return false
    }
  }
  getSelectedColor(colorName:string){
    if (this.filterColorName==colorName) {
      return true
    }
    else{
      return false
    }
  }

  
  addToCart(car:Car){
    
    if (this.cartService.checkIfCarExistsInCart(car)) {
      this.toasterService.error(car.brandName,"Sepete Eklenemedi,Zaten Mevcut")
    }
    else{
      this.cartService.addToCart(car)
    
      this.toasterService.success(car.brandName,"Sepete Eklendi")
    }
   
  }
  
 
}
