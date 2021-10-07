import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Rental } from '../models/Rental';
import { RentalDetail } from '../models/Rental-Detail';
import { RentalResponseModel } from '../models/rentalResponseModel';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class RentalService {
  
  apiUrl="https://localhost:44341/api/"
  public editRentDate:Date = null
  public editReturnDate:Date = null;

  private rentDateSource=new BehaviorSubject(this.editRentDate)
  private returnDateSource=new BehaviorSubject(this.editReturnDate)

  currentRentDate = this.rentDateSource.asObservable()
  currentReturnDate = this.returnDateSource.asObservable()

  result:ResponseModel
  rentalCar:Rental;
  carId:number;



  constructor(private httpClient:HttpClient) { }
  getRentals():Observable<ListResponseModel<RentalDetail>>{
   let newPath=this.apiUrl+"Rentals/getrentaldetailsbydto"
    return this.httpClient.get<ListResponseModel<RentalDetail>>(newPath);
  }
  getRentalByCarId(carID:number):Observable<ListResponseModel<Rental>>{
    
    let newPath=this.apiUrl+"Rentals/getrentalbycarid?carId="+carID
    return this.httpClient.get<ListResponseModel<Rental>>(newPath)

  }
  addRental():Observable<ListResponseModel<Rental>>{
    let newPath=this.apiUrl+"Rentals/add"
    return this.httpClient.post<ListResponseModel<Rental>>(newPath,this.rentalCar)
  }

  changeDate(rentDate:Date,returnDate:Date){
    this.rentDateSource.next(rentDate)
    this.returnDateSource.next(returnDate)
  }
  setDates(rentDate:Date,returndate:Date){
      this.rentalCar={carID:2,customerID:1,rentDate:rentDate,returnDate:returndate};
  }
  setCarId(carId:number){
    this.carId = carId;
  }

  checkRental():Observable<ResponseModel>{
    let newPath = this.apiUrl + "Rentals/rentalable";
    return this.httpClient.post<ResponseModel>(newPath, this.rentalCar);
  }
  payment():Observable<boolean>{
    let newPath = this.apiUrl + "Rentals/payment";
    return this.httpClient.get<boolean>(newPath);
  }


}
