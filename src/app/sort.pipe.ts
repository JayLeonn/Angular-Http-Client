import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort',
})
export class SortPipe implements PipeTransform {
  transform(value: any[], field: string): any[] {
    if (!field) return value;
    return value.sort((a, b) => a[field].localeCompare(b[field]));
  }
}
