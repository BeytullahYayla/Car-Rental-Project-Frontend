import { Injectable } from '@angular/core';
import { CarDetail } from '../models/car-detail';
import { CarItems } from '../models/carItems';
import { CartItem } from '../models/cartItem';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(
   
  ) { }

  addToCart(car:CarDetail){
    let item=CarItems.find(c=>c.car.carID===car.carID)
    if (item) {
      
     console.log("Araba Zaten Mevcut")

    }
    else{
     let cartItem=new CartItem()
     cartItem.car=car
     CarItems.push(cartItem)

    }
  }
  removeFromCart(car:CarDetail){
      let item:CartItem=CarItems.find(c=>c.car.carID===car.carID)
      CarItems.splice(CarItems.indexOf(item),1)
  }
  list():CartItem[]{
    return CarItems
  }
  checkIfCarExistsInCart(car:CarDetail){
    let item=CarItems.find(c=>c.car.carID===car.carID)
    if (item) {
      return true
    }
    else{
      return false
    }
  }

}
