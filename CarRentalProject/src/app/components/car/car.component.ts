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
    private router:Router
    
    ) { }
  cars:Car[]=[]
  brands:Brand[]=[]
  colors:Color[]=[]
 

  imgUrl: string = 'https://localhost:44341/';
  defaultImage = 'default.jpg';

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      params=>{
        if (params["brandID"]) {
          this.getCarsByBrand(params["brandID"])
        }
        else if (params["colorID"]) {
          this.getCarsByColor(params["colorID"])
          
        }
        else if(params["brandID"] && params["colorID"]){
          this.getCarsByFilter(params["brandID"],params["colorID"])
        }
        else{
          this.getCars()
        
        }
        this.getColors();
        this.getBrands();
      }
    )
    
  }
  getCars(){
      this.carService.getCars().subscribe(response=>{
        this.cars=response.data;
        this.dataLoaded=true;
      })
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
  getCarsByFilter(brandID:number,colorID:number){
    this.carService.getCarsByFilter(brandID,colorID).subscribe(
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
}
