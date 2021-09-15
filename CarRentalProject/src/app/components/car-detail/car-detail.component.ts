import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Car } from 'src/app/models/Car';
import { CarImage } from 'src/app/models/carImage';
import { CarImageService } from 'src/app/services/car-image.service';
import { CarService } from 'src/app/services/car.service';


@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css']
})
export class CarDetailComponent implements OnInit {

  cars:Car[]=[]
  carImages:CarImage[]=[]
  currentImage:CarImage

  defaultPath = 'https://localhost:44341';

  constructor(private carService:CarService,
    private carImageService:CarImageService,
    private activatedRoute:ActivatedRoute,
    private router:Router
    ) { 
      
    }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      params=>{
        if (params["carID"]) {
          this.getCarsByCarId(params["carID"])
          this.getCarImages(params["carID"])
          
        }
      }
    )
  }

  getCarsByCarId(carID:number){
    this.carService.getCarsByCarId(carID).subscribe(
      response=>{
        this.cars=response.data;
      }
    )
  }
  getCarImages(carID:number){
    this.carService.getCarImagesByCarId(carID).subscribe(
      response=>{
        this.carImages=response.data
      }
    )
  }
  getButtonClass(image:CarImage){
    if (this.carImages[0]==image) {
      return "active"
    }
    else{
      return ""
    }
  }

  getPath(){
    return this.defaultPath
  }
  setCurrentImageClass(image:CarImage){
    this.currentImage=image

  }
  getCurrentImageClass(image:CarImage){
    if (this.carImages[0]==image) {
      return "carousel-item active"
    }
    else{
      return "carousel-item"
    }


  }
}
