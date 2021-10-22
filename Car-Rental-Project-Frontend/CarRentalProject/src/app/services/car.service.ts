import { HttpClient } from '@angular/common/http';
import { ThrowStmt } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from '../models/car';
import { CarDetail } from '../models/car-detail';
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
  getCars():Observable<ListResponseModel<CarDetail>>{
    let newPath=this.apiUrl+"Cars/getcardetailsbydto"
    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath);
}
getCarsByBrand(brandID:number):Observable<ListResponseModel<CarDetail>>{
  let newPath=this.apiUrl+"Cars/getbybrandid?id="+brandID
  return this.httpClient.get<ListResponseModel<CarDetail>>(newPath);
}
getCarsByColor(colorID:number):Observable<ListResponseModel<CarDetail>>{
  let newPath=this.apiUrl+"Cars/getbycolorid?id="+colorID
  return this.httpClient.get<ListResponseModel<CarDetail>>(newPath);

}
getCarsByFilter(brandID:number,colorID:number):Observable<ListResponseModel<CarDetail>>{
  let newPath=this.apiUrl+"Cars/getcarsbyfilter?brandId="+brandID+"&colorId="+colorID;
  return this.httpClient.get<ListResponseModel<CarDetail>>(newPath)
}
getCarsByCarId(carID:number):Observable<ListResponseModel<CarDetail>>{
  let newPath=this.apiUrl+"Cars/getbyid?id="+carID;
  return this.httpClient.get<ListResponseModel<CarDetail>>(newPath);
}
getCarImagesByCarId(carID:number):Observable<ListResponseModel<CarImage>>{
  let newPath=this.apiUrl+"CarImages/getimagesbycarid?carId="+carID
  return this.httpClient.get<ListResponseModel<CarImage>>(newPath)
}
getCarsByBrandName(brandName:string):Observable<ListResponseModel<CarDetail>>{
  let newPath=this.apiUrl+"Cars/getcarsbybrandname?brandName="+brandName
  return this.httpClient.get<ListResponseModel<CarDetail>>(newPath)
}
getCarsByColorName(colorName:string):Observable<ListResponseModel<CarDetail>>{
  let newPath=this.apiUrl+"Cars/getcarsbycolorname?colorName="+colorName
  return this.httpClient.get<ListResponseModel<CarDetail>>(newPath)
}
getCarsByBrandAndColorName(brandName:string,colorName:string):Observable<ListResponseModel<CarDetail>>{
  let newPath=this.apiUrl+"Cars/getcarsbybrandandcolorname?brandName="+brandName+"&colorName="+colorName

  return this.httpClient.get<ListResponseModel<CarDetail>>(newPath)
}
add(car:CarDetail):Observable<ResponseModel>{
  let newPath=this.apiUrl+"Cars/add"
  return this.httpClient.post<ResponseModel>(newPath,car)

}
delete(car:Car):Observable<ResponseModel>{
  let newPath=this.apiUrl+"Cars/delete"
  return this.httpClient.post<ResponseModel>(newPath,car)
}
update(car:Car):Observable<ResponseModel>{
  let newPath=this.apiUrl+"Cars/update"
  return this.httpClient.post<ResponseModel>(newPath,car)
}
}
