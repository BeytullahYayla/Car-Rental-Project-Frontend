import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Car } from 'src/app/models/Car';
import { CarImage } from 'src/app/models/carImage';
import { CartItem } from 'src/app/models/cartItem';
import { CarImageService } from 'src/app/services/car-image.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart-summary',
  templateUrl: './cart-summary.component.html',
  styleUrls: ['./cart-summary.component.css']
})
export class CartSummaryComponent implements OnInit {

  cartItems:CartItem[]=[]
  defaultPath="https://localhost:44341/"
  constructor(
    private cartService:CartService,
    private toastrService:ToastrService,
    private carImageService:CarImageService
  ) { }

  ngOnInit(): void {
    this.getCartItems()
    
  }
  getCartItems(){
    this.cartItems=this.cartService.list()
  }
  removeFromCart(car:Car){
    this.toastrService.error(car.brandName,"Sepetten Silindi")
    this.cartService.removeFromCart(car)
  }
  getImagePath(imagePath:string){
    return this.defaultPath+imagePath

  }
}
