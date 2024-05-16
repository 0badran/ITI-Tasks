import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'processID',
  standalone: true
})
export class ProcessIDPipe implements PipeTransform {
  transform(value: string, arg?: string): any {
    let process1 = value.split("").slice(0, 7).join("");
    let process2 = process1[0];
    let result = (process2[0] == "2") ? process1.replace("2", "19") : process1.replace("3", "20");
    var year = result.slice(0, 4);
    var month = result.slice(4, 6);
    var day = result.slice(6, 8);
    let biryhDate = new Date(`${year}-${month}-${day}`);
    switch (arg) {
      case 'day':
        return biryhDate.getDate();
      case 'month':
        return biryhDate.getMonth()+1;
      case 'year':
        return biryhDate.getFullYear();
      default:
        return biryhDate.toLocaleDateString("en-US")
    }
  }

}
