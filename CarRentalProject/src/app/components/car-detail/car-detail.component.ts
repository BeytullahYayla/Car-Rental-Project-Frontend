import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Brand } from 'src/app/models/Brand';
import { Car } from 'src/app/models/Car';
import { CarImage } from 'src/app/models/carImage';
import { TotalPricePipePipe } from 'src/app/pipes/total-price-pipe.pipe';
import { CarImageService } from 'src/app/services/car-image.service';
import { CarService } from 'src/app/services/car.service';
import { CartService } from 'src/app/services/cart.service';



@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css']
})
export class CarDetailComponent implements OnInit {

  cars:Car[]=[]
  brands:Brand[]=[]
  carImages:CarImage[]=[]
  currentImage:CarImage
  currentCar:Car
  totalPrice:number=100
  totalPricePipe:TotalPricePipePipe
 

  defaultPath = 'https://localhost:44341';

  constructor(private carService:CarService,
    private carImageService:CarImageService,
    private activatedRoute:ActivatedRoute,
    private router:Router,
    private cartService:CartService,
    private toastrService:ToastrService
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
  getCurrentCar(car:Car){
    return this.currentCar=car
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
  getImagePath(imagePath:string){
      return this.defaultPath+"/"+imagePath
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
  addToCart(car:Car){
    
    if (this.cartService.checkIfCarExistsInCart(car)) {
      this.toastrService.error(car.brandName,"Sepete Eklenemedi,Zaten Mevcut")
    }
    else{
      this.cartService.addToCart(car)
    
      this.toastrService.success(car.brandName,"Sepete Eklendi")
    }
   
  }
  
  
}
