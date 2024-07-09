import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numberFormat',
  standalone: true,
})
export class NumberFormatPipe implements PipeTransform {
  transform(value: number): string {

    if (value === null || value === undefined) {
      return '';
    }

    let numStr = value.toString();
    let [integerPart, fractionalPart] = numStr.split('.');
    if (integerPart.length > 2) {
      integerPart = integerPart.slice(0, -2) + ',' + integerPart.slice(-2);
    }

    return fractionalPart ? `${integerPart}.${fractionalPart}` : integerPart;
  }
}
