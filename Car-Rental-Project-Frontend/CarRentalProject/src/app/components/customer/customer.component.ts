import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/models/Customer';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  customers:Customer[]=[]
  constructor(private customerService:CustomerService) { }

  ngOnInit(): void {
  }
  getCustomers(){
    this.customerService.getCustomers().subscribe(response=>{
      customers:response.data;
    })
  }
}
