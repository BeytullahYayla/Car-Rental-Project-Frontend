import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from '../models/Car';
import { CarImage } from '../models/carImage';
import { CarResponseModel } from '../models/carResponseModel';
import { ListResponseModel } from '../models/listResponseModel';
import { ResponseModel } from '../models/responseModel';

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
getCarsByBrand(brandID:number):Observable<ListResponseModel<Car>>{
  let newPath=this.apiUrl+"Cars/getbybrandid?id="+brandID
  return this.httpClient.get<ListResponseModel<Car>>(newPath);
}
getCarsByColor(colorID:number):Observable<ListResponseModel<Car>>{
  let newPath=this.apiUrl+"Cars/getbycolorid?id="+colorID
  return this.httpClient.get<ListResponseModel<Car>>(newPath);

}
getCarsByFilter(brandID:number,colorID:number):Observable<ListResponseModel<Car>>{
  let newPath=this.apiUrl+"Cars/getcarsbyfilter?brandId="+brandID+"&colorId="+colorID;
  return this.httpClient.get<ListResponseModel<Car>>(newPath)
}
getCarsByCarId(carID:number):Observable<ListResponseModel<Car>>{
  let newPath=this.apiUrl+"Cars/getbyid?id="+carID;
  return this.httpClient.get<ListResponseModel<Car>>(newPath);
}
getCarImagesByCarId(carID:number):Observable<ListResponseModel<CarImage>>{
  let newPath=this.apiUrl+"CarImages/getimagesbycarid?carId="+carID
  return this.httpClient.get<ListResponseModel<CarImage>>(newPath)
}
getCarsByBrandName(brandName:string):Observable<ListResponseModel<Car>>{
  let newPath=this.apiUrl+"Cars/getcarsbybrandname?brandName="+brandName
  return this.httpClient.get<ListResponseModel<Car>>(newPath)
}
getCarsByColorName(colorName:string):Observable<ListResponseModel<Car>>{
  let newPath=this.apiUrl+"Cars/getcarsbycolorname?colorName="+colorName
  return this.httpClient.get<ListResponseModel<Car>>(newPath)
}
getCarsByBrandAndColorName(brandName:string,colorName:string):Observable<ListResponseModel<Car>>{
  let newPath=this.apiUrl+"Cars/getcarsbybrandandcolorname?brandName="+brandName+"&colorName="+colorName

  return this.httpClient.get<ListResponseModel<Car>>(newPath)
}
add(car:Car){
  let newPath=this.apiUrl+"Cars/add"
  return this.httpClient.post<ResponseModel>(newPath,car)

}
}
