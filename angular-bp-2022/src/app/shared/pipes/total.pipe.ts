import { Pipe, PipeTransform } from '@angular/core';
import { Order } from 'src/app/core/models/order';

@Pipe({
  name: 'total'
})
export class TotalPipe implements PipeTransform {

  transform(val: Order, tva?: boolean): number {
    //console.log(value, 'depuis pipe')
     if(tva){
      return val.totalTTC()
    }
    return val.totalHT()
  }

}
