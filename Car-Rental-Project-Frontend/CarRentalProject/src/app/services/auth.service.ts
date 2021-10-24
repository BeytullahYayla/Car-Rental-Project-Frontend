import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginModel } from '../models/login';
import { ResponseModel } from '../models/responseModel';
import { SingleResponseModel } from '../models/singleResponseModel';
import { TokenModel } from '../models/token';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiUrl="https://localhost:44341/api/"
  constructor(private httpClient:HttpClient,
    
    
    ) { }
  login(loginModel:LoginModel){
    let newPath=this.apiUrl+"Auth/login"
    return this.httpClient.post<SingleResponseModel<TokenModel>>(newPath,loginModel,);

  }
  isAuthenticated(){
    if (localStorage.getItem("token")) {
      return true
    }
    else{
      return false
    }

  }
}
