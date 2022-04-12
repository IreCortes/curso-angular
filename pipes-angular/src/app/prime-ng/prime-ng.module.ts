import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';
import { CardModule } from 'primeng/card';
import { FieldsetModule } from 'primeng/fieldset';

@NgModule({
  exports: [ButtonModule, MenubarModule, CardModule, FieldsetModule],
})
export class PrimeNgModule {}
