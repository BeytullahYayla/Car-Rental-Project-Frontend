import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Color } from '../models/Color';
import { ColorResponseModel } from '../models/colorResponseModel';
import { ListResponseModel } from '../models/listResponseModel';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class ColorService {

  apiUrl="https://localhost:44341/api/"

  constructor(private httpClient:HttpClient) { }
  getColors():Observable<ListResponseModel<Color>>{
    return this.httpClient.get<ListResponseModel<Color>>(this.apiUrl+"Colors/getall");
  }
  add(color:Color):Observable<ResponseModel>{

    let newPath=this.apiUrl+"Colors/add"
    return this.httpClient.post<ResponseModel>(newPath,color);

  }
  deleteColor(color:Color):Observable<ResponseModel>{
    let newPath=this.apiUrl+"Colors/delete"
    return this.httpClient.post<ResponseModel>(newPath,color)
  }
  updateColor(color:Color):Observable<ResponseModel>{
    let newPath=this.apiUrl+"Colors/update"
    return this.httpClient.post<ResponseModel>(newPath,color)
  }
  getColorByColorId(colorID:number):Observable<ListResponseModel<Color>>{
    let newPath=this.apiUrl+"Colors/getbyid?id="+colorID
    return this.httpClient.get<ListResponseModel<Color>>(newPath)

  }
}
