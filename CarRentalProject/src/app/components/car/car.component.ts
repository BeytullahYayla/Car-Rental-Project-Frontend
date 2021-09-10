import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/models/Car';
import { HttpClient } from  '@angular/common/http';
import { CarResponseModel } from 'src/app/models/carResponseModel';
import { CarService } from 'src/app/services/car.service';
import { ActivatedRoute } from '@angular/router';

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
  constructor(private carService:CarService,private activatedRoute:ActivatedRoute) { }
  cars:Car[]=[]
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      params=>{
        if (params["brandID"]) {
          this.getCarsByBrand(params["brandID"])
        }else{
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
  getCarsByBrand(brandID:number){
    this.carService.getCarsByBrand(brandID).subscribe(
      response=>{
        this.cars=response.data;
      }
    )
  }

}
