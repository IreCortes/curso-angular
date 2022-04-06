import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main-page/main-page.component';
import { PersonajesComponent } from './personajes/personajes.component';
import { NuevosPersonajesComponent } from './nuevos-personajes/nuevos-personajes.component';
import { FormsModule } from '@angular/forms';
import { DbzService } from './services/dbz.service';

@NgModule({
  declarations: [
    MainPageComponent,
    PersonajesComponent,
    NuevosPersonajesComponent,
  ],
  exports: [MainPageComponent],
  imports: [CommonModule, FormsModule],
  providers: [DbzService],
})
export class DbzModule {}
