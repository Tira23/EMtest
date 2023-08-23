import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'textTransform'
})
export class TextTransformPipe implements PipeTransform {

  transform(value: string) {
    return value.slice(0,1).toUpperCase() + value.slice(1)
  }

}
