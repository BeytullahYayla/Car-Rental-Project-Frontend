import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { RentalService } from 'src/app/services/rental.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  message:string;
  response:boolean;
  constructor(

    private rentalService:RentalService,
    private toastrService:ToastrService
  ) { }

  ngOnInit(): void {
  }

  payment(){
    this.rentalService.payment().subscribe(
      response=>{
        this.rentalService.addRental().subscribe(
          response=> {
            this.toastrService.success("Kiralama Basarili")
          }
        )
      }
    )
  }

}
