import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'processCreditCard',
  standalone: true
})
export class ProcessCreditCardPipe implements PipeTransform {

  transform(value: string): string {
    var limet = 4;
    let result = String();
    for (let i = 0, len = value.length; i < len; i++) {
      if (i == limet) {
        result += " - ";
        limet += len/4;
      }
      result += value[i];
    }
    return result;
  }

}
