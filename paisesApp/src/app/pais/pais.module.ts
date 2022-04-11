import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PorCapitalComponent } from './pages/por-capital/por-capital.component';
import { PorPaisComponent } from './pages/por-pais/por-pais.component';
import { VerPaisComponent } from './pages/ver-pais/ver-pais.component';
import { PorRegionComponent } from './pages/por-region/por-region.component';
import { AppRoutingModule } from '../app-routing.module';
import { PaisTablaComponent } from './components/pais-tabla/pais-tabla.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';

@NgModule({
  declarations: [
    PorCapitalComponent,
    PorPaisComponent,
    VerPaisComponent,
    PorRegionComponent,
    PaisTablaComponent,
    SearchBarComponent,
  ],
  exports: [
    PorCapitalComponent,
    PorPaisComponent,
    VerPaisComponent,
    PorRegionComponent,
  ],
  imports: [CommonModule, FormsModule, AppRoutingModule],
})
export class PaisModule {}
