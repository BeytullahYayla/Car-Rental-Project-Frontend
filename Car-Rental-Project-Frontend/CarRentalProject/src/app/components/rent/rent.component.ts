import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CarDetail } from 'src/app/models/car-detail';
import { Rental } from 'src/app/models/Rental';
import { CarService } from 'src/app/services/car.service';
import { RentalService } from 'src/app/services/rental.service';

@Component({
  selector: 'app-rent',
  templateUrl: './rent.component.html',
  styleUrls: ['./rent.component.css']
})
export class RentComponent implements OnInit {
  responseSuccess:boolean;
  responseMessage:string = "";
  rentDate:Date;
  returnDate:Date;
  checkSuccess:Boolean = false;
  checkMessage:string = "Lütfen Tarih Seçiniz!";
  cars:CarDetail[]=[]

  constructor(private rentalService:RentalService, 
    
    private toastrService:ToastrService,
    
    private carService:CarService,
    private activatedRoute:ActivatedRoute
    
    ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      params=>{
        if (params["carID"]) {
          this.getCarByCarId(params["carID"])
        }
      }
    )
    
    }
    setDates(rentDate:Date, returnDate:Date){
      this.rentalService.setDates(rentDate, returnDate);
      this.checkRental();
    }
    addRental(){
      this.rentalService.addRental().subscribe(response=>{
     
      
       this.toastrService.success("İşlem Başarılı")   
      })
    }
    checkRental(){
      this.rentalService.checkRental().subscribe(response=>{
        this.checkSuccess = response.success;   
      }, responseError =>{
          this.toastrService.error(" Lütfen Farklı Bir Tarih Seçiniz","Kiralama Yapılamadı")
      })
    }
    getCarByCarId(carID:number){
      this.carService.getCarsByCarId(carID).subscribe(
        response=>{
          this.cars=response.data
        }
      )

    }
}