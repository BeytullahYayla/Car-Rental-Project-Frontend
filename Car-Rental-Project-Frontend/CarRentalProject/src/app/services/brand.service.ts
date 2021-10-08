import { HttpClient } from '@angular/common/http';
import { ThrowStmt } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Brand } from '../models/Brand';
import { BrandResponseModel } from '../models/brandResponseModel';
import { ListResponseModel } from '../models/listResponseModel';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class BrandService {

  apiUrl="https://localhost:44341/api/"
  constructor(private httpClient:HttpClient) { }
  getBrands():Observable<ListResponseModel<Brand>>{
    let newPath=this.apiUrl+"Brands/getall"
    return this.httpClient.get<ListResponseModel<Brand>>(this.apiUrl+"Brands/getall");
  }
  add(brand:Brand):Observable<ResponseModel>{
    let newPath=this.apiUrl+"Brands/add"
    return this.httpClient.post<ResponseModel>(newPath,brand)
  }
  deleteBrand(brand:Brand){
    let newPath=this.apiUrl+"Brands/delete"
    return this.httpClient.post<ResponseModel>(newPath,brand)

  }
}
