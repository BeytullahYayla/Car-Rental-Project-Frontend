import { Injectable } from '@angular/core';
import { Car } from '../models/Car';
import { CarItems } from '../models/carItems';
import { CartItem } from '../models/cartItem';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(
   
  ) { }

  addToCart(car:Car){
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
  removeFromCart(car:Car){
      let item:CartItem=CarItems.find(c=>c.car.carID===car.carID)
      CarItems.splice(CarItems.indexOf(item),1)
  }
  list():CartItem[]{
    return CarItems
  }
  checkIfCarExistsInCart(car:Car){
    let item=CarItems.find(c=>c.car.carID===car.carID)
    if (item) {
      return true
    }
    else{
      return false
    }
  }

}
