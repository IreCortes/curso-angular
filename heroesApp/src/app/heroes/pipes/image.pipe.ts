import { Pipe, PipeTransform } from '@angular/core';
import { Heroe } from '../interfaces/Heroe';

@Pipe({
  name: 'image',
})
export class ImagePipe implements PipeTransform {
  transform(heroe: Heroe, ...args: unknown[]): string {
    return `../../../assets/heroes/${heroe.id}.jpg`;
    // return heroe.alt_img
    //   ? 'assets/heroes/{{ heroe.id }}.jpg'
    //   : 'assets/no-image.jpg';
  }
}
