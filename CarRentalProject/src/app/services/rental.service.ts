import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Rental } from '../models/Rental';
import { RentalDetail } from '../models/Rental-Detail';
import { RentalResponseModel } from '../models/rentalResponseModel';

@Injectable({
  providedIn: 'root'
})
export class RentalService {
  
  apiUrl="https://localhost:44341/api/"
  constructor(private httpClient:HttpClient) { }
  getRentals():Observable<ListResponseModel<RentalDetail>>{
   let newPath=this.apiUrl+"Rentals/getrentaldetailsbydto"
    return this.httpClient.get<ListResponseModel<RentalDetail>>(newPath);
  }
  getRentalByCarId(carID:number):Observable<ListResponseModel<Rental>>{
    
    let newPath=this.apiUrl+"Rentals/getrentalbycarid?carId="+carID
    return this.httpClient.get<ListResponseModel<Rental>>(newPath)

  }
  addRental(rental:Rental):Observable<ListResponseModel<Rental>>{
    let newPath=this.apiUrl+"Rentals/add"
    return this.httpClient.post<ListResponseModel<Rental>>(newPath,rental)
  }

}
