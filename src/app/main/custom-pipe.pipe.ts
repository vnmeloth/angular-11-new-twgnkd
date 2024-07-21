import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customPipe',
})
export class CustomPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    return value + ' Custom Pipe ' + args;
  }
}
