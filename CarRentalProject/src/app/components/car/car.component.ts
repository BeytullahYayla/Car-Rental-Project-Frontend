import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/models/Car';
import { HttpClient } from  '@angular/common/http';
import { CarResponseModel } from 'src/app/models/carResponseModel';
import { CarService } from 'src/app/services/car.service';

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
  constructor(private carService:CarService) { }
  cars:Car[]=[]
  ngOnInit(): void {
    this.getCars();
    
  }
  getCars(){
      this.carService.getCars().subscribe(response=>{
        this.cars=response.data;
        this.dataLoaded=true;
      })
  }

}
