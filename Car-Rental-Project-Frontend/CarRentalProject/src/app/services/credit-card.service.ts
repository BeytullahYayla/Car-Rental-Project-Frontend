import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { CreditCard } from '../models/creditCard';
import { CreditCardHashed } from '../models/creditCardHashed';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CreditCardService {

  apiUrl="https://localhost:44363/api/frombankcreditcard/";

  constructor(private httpClient:HttpClient) {}
  
  checkTheCreditCard(creditCard:CreditCard):Observable<ListResponseModel<CreditCard>>{
    let newPath = this.apiUrl + 'checkthecard'
    return this.httpClient.post<ListResponseModel<CreditCard>>(newPath, creditCard) //(1)
  }

  checkTheSavedCreditCard(creditCard:CreditCardHashed):Observable<ListResponseModel<CreditCardHashed>>{
    let newPath = this.apiUrl + 'checkthesavedcard'
    return this.httpClient.post<ListResponseModel<CreditCardHashed>>(newPath, creditCard)
  }

  getCards():Observable<ListResponseModel<CreditCard>>{
    let newPath = this.apiUrl + "getall"
    return this.httpClient.get<ListResponseModel<CreditCard>>(newPath);
  }

  getCardByUserId(userId:number):Observable<ListResponseModel<CreditCardHashed>>{
    let newPath = this.apiUrl + "getbyuserid?userId=" + userId
    return this.httpClient.get<ListResponseModel<CreditCardHashed>>(newPath);
  }

  handleError(error: HttpErrorResponse) { // Bu method dönen hataları yakalamak için
    return throwError(error);             // *(1) Kullanılacağı metodda .pipe() ile eklenir
  }
}