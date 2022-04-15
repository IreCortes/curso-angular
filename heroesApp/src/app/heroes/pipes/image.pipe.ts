import { Pipe, PipeTransform } from '@angular/core';
import { Heroe } from '../interfaces/Heroe';

@Pipe({
  name: 'image',
})
export class ImagePipe implements PipeTransform {
  transform(heroe: Heroe, ...args: unknown[]): string {
    if (!heroe.id && !heroe.alt_img) {
      return '../../../assets/no-image.png';
    } else if (heroe.alt_img) {
      return heroe.alt_img;
    }
    return `../../../assets/heroes/${heroe.id}.jpg`;
    // return heroe.alt_img
    //   ? 'assets/heroes/{{ heroe.id }}.jpg'
    //   : 'assets/no-image.jpg';
  }
}
