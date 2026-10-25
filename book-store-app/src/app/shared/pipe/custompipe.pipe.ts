import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custompipe'
})
export class CustompipePipe implements PipeTransform {

  transform(value: unknown): unknown {

    return value ? 'Yes' : 'No';
  }

}
