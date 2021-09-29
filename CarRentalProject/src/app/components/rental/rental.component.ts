import { Component,EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Event, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Brand } from 'src/app/models/Brand';
import { Car } from 'src/app/models/Car';
import { CarImage } from 'src/app/models/carImage';
import { Rental } from 'src/app/models/Rental';
import { RentalDetail } from 'src/app/models/Rental-Detail';
import { CarImageService } from 'src/app/services/car-image.service';
import { CarService } from 'src/app/services/car.service';
import { RentalService } from 'src/app/services/rental.service';




@Component({
  selector: 'app-rental',
  templateUrl: './rental.component.html',
  styleUrls: ['./rental.component.css']
})
export class RentalComponent implements OnInit {
  rentalDetails:RentalDetail[]
  rentals:Rental[]=[]
  @Input() carDetails:Car[]=[]
  rentDate:Date
  returnDate:Date
  @Output() parentFunction:EventEmitter<any>=new EventEmitter()
  cars:Car[]
  dateStatus:boolean=false
  
  



  constructor(
    
    private rentalService:RentalService,
    private carService:CarService,
    private activatedRoute:ActivatedRoute,
    private toastrService:ToastrService
    ) { 
      
    }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      params=>{
        if (params["carID"]) {
          this.getCarByCarId(params["carID"])
          this.getRentals()
        }
      }
    )
    
  }

  getRentals(){
    this.rentalService.getRentals().subscribe(
      response=>{
        this.rentalDetails=response.data
      }
    )
  }
  getCarByCarId(carID:number){
    this.carService.getCarsByCarId(carID).subscribe(
      response=>{
         this.cars=response.data
      }
    )
  }
  redirectToPayment(carID:number){
  let result = this.rentals.find(value => value.carID == carID);
    
    if(result){
      if(this.rentDate == null || this.returnDate == null)
      {
        this.toastrService.error("Kiralama veya dönüş tarihi boş olamaz.")
      }
      else{
        if(result.returnDate > this.rentDate){
          this.toastrService.warning("Araç kiralamaya uygun değil.")
        }
        else{
          this.toastrService.info("Araç müsait.")
          //this.router.navigate(["/payment"]);
          this.parentFunction.emit(this.dateStatus = true)
        }
      }
    }
    else{
      if(this.rentDate == null || this.returnDate == null){
        this.toastrService.error("Kiralama veya dönüş tarihi boş olamaz.")
      }
      else{
        if (this.rentDate>this.returnDate) {
          this.toastrService.warning("Tarih Geçersiz")
        }
       
        else{
          this.toastrService.info("Araç müsait.")
          //this.router.navigate(["/payment"]);
          this.parentFunction.emit(this.dateStatus = true)
        }      
      }
      
      
    }
    console.log(this.rentDate);
    console.log(this.returnDate);
  }
}
    
    

  
 
 
  
  
  


