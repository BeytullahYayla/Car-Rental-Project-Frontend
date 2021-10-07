import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'totalPricePipe'
})
export class TotalPricePipePipe implements PipeTransform {

  transform(value:number):number {
    return (value*70)/100
  }

}
