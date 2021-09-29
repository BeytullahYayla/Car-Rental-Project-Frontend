import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { Component, ErrorHandler, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Car } from 'src/app/models/Car';
import { Rental } from 'src/app/models/Rental';
import { RentalDetail } from 'src/app/models/Rental-Detail';
import { CarService } from 'src/app/services/car.service';
import { CustomerService } from 'src/app/services/customer.service';
import { ErrorHandlerServiceService } from 'src/app/services/error-handler-service.service';
import { RentalService } from 'src/app/services/rental.service';


@Component({
  selector: 'app-rental-add',
  templateUrl: './rental-add.component.html',
  styleUrls: ['./rental-add.component.css']
})
export class RentalAddComponent implements OnInit {
  rentals:Rental[]
  rentAddForm:FormGroup
  car:Car={} as Car
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private toastrService: ToastrService,
    private formBuilder: FormBuilder,
    private rentalService: RentalService,
    private errorHandlerService:ErrorHandlerServiceService
  
    
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.car.carID = params.id;
    });
    this.createRentalAddForm();

  }

  getRentalByCarId(carID:number){

    this.rentalService.getRentalByCarId(carID).subscribe(
      response=>{
        this.rentals=response.data
      }
    )
  }
  createRentalAddForm(){
    this.rentAddForm=this.formBuilder.group({
      rentDate:["",Validators.required],
      returnDate:["",Validators.required]
    })

  }
  addRental(){
    if (this.rentAddForm.valid) {
      let rentalModel:Rental=Object.assign({},this.rentAddForm.value)
      rentalModel.carID=this.car.carID
      
      this.rentalService.addRental(rentalModel).subscribe(
        response=>{
          console.log(response)
          this.toastrService.success("Başarılı")
        },
        responseError=>{
          let errorMessages=this.errorHandlerService.getErrorMessages(responseError)
          errorMessages.forEach(message=>this.toastrService.error(message));
        }
      )
    }
  }

}

