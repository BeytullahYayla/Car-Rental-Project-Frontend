import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarImage } from '../models/carImage';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class CarImageService {

  apiUrl= "https://localhost:44341/";
  constructor(private httpClient:HttpClient) { }
  getImagePath(imagePath:string){
    return this.apiUrl+imagePath
  }
  delete(carImage:CarImage):Observable<ResponseModel>{
    let newPath=this.apiUrl+"CarImages/delete"
    return this.httpClient.post<ResponseModel>(newPath,carImage)

  }
}
