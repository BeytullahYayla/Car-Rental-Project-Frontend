import { Component, OnInit } from '@angular/core';
import { Brand } from 'src/app/models/Brand';
import { BrandService } from 'src/app/services/brand.service';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent implements OnInit {

  brands:Brand[]=[];
  currentBrand:Brand;
  constructor(private brandService:BrandService) { }

  ngOnInit(): void {
    this.getBrands();
  }
  getBrands(){
    this.brandService.getBrands().subscribe(response=>{this.brands=response.data});

  }
  setCurrentBrand(brand:Brand){
    this.currentBrand=brand;
  }
  
  getCurrentBrand(brand:Brand){
    if (this.currentBrand==brand) {
      return "list-group-item active"
    }
    else{
      return "list-group-item"
    }
  }

}
