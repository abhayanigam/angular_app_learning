import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyConvertor',
})
export class CurrencyConvertorPipe implements PipeTransform {

  transform(value: number, ...args: number[]): unknown {
    console.log(args);

    let [data] = args;
    console.log(data);

    return value * (data as number);
  }

}
