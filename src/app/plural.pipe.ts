import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'plural',
})
export class PluralPipe implements PipeTransform {
  transform(value: any, single: string, plural: string): unknown {
    if (!value) return String(value);
    if (value == 1) return value + ' ' + single;
    else return value + ' ' + plural;
  }
}
