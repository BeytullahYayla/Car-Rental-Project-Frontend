import { Pipe, PipeTransform } from '@angular/core';
import { Car } from '../models/Car';


@Pipe({
  name: 'filterColorPipe'
 
})
export class FilterColorPipePipe implements PipeTransform {

  transform(value: Car[], colorID:number): Car[] {
    
    return colorID?value.filter((c:Car)=>c.colorID==colorID):value;
  }

}
