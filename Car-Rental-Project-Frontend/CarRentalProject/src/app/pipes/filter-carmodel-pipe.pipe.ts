import { Pipe, PipeTransform } from '@angular/core';
import { Car } from '../models/Car';

@Pipe({
  name: 'filterCarmodelPipe'
})
export class FilterCarmodelPipePipe implements PipeTransform {

  transform(value: Car[], filterText:string): Car[]{
    filterText=filterText?filterText.toLocaleLowerCase():"";
    return filterText?value.filter((c:Car)=>c.modelYear.toLocaleLowerCase().indexOf(filterText)!==-1):value
    
  }

}
