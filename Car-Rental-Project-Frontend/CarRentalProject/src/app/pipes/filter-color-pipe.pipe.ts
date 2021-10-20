import { Pipe, PipeTransform } from '@angular/core';
import { CarDetail } from '../models/car-detail';


@Pipe({
  name: 'filterColorPipe'
 
})
export class FilterColorPipePipe implements PipeTransform {

  transform(value: CarDetail[], colorID:number): CarDetail[] {
    
    return colorID?value.filter((c:CarDetail)=>c.colorID==colorID):value;
  }

}
