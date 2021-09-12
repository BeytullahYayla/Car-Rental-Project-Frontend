import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarImageService } from 'src/app/services/car-image.service';
import { CarService } from 'src/app/services/car.service';
import { Car } from '../../models/Car';
import { CarImage } from '../../models/carImage';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css']
})
export class CarDetailComponent implements OnInit {

  carImages:CarImage[]
  cars:Car[]=[]
  currentImage:CarImage

  defaultPath = 'https://localhost:44341'
  constructor(
    private carService:CarService,
    private carImageService:CarImageService,
    private activatedRoute:ActivatedRoute

  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      (params)=>{
        if (params["carID"]) {
          this.getCarsById(params["carID"]),
          this.getCarImages(params["carID"])

        }
      }
    )
  }
  getCarsById(carID:number){
    this.carService.getCarsByCarId(carID).subscribe(
      response=>{
        this.cars=response.data;
        
      }
    )
  }
  getPath(){
    return this.defaultPath;
  }
  getCarImages(carID:number){
    this.carService.getCarImagesByCarId(carID).subscribe(
      response=>{
        this.carImages=response.data
      }
    )
  }
  getButtonClass(image:CarImage){
    if ((image=this.carImages[0])) {
      return "active"
    }else{
      return ""
    }
  }
  setCurrentImageClass(image:CarImage){
    this.currentImage=image
  }
  getCurrentImage(image:CarImage){
    if (this.carImages[0]=image) {
      return "carousel-item active"
    }
    else{
      return "carousel-item"
    }
  }

}
