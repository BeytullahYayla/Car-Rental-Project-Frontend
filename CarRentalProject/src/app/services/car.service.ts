import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from '../models/Car';
import { CarResponseModel } from '../models/carResponseModel';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  apiUrl="https://localhost:44341/api/"
 
  constructor(private httpClient:HttpClient) { }
  getCars():Observable<ListResponseModel<Car>>{
    let newPath=this.apiUrl+"Cars/getcardetailsbydto"
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
}
getCarsByBrand(categoryID:number):Observable<ListResponseModel<Car>>{
  let newPath=this.apiUrl+"Cars/getbybrandid?id="+categoryID
  return this.httpClient.get<ListResponseModel<Car>>(newPath);
}
}
