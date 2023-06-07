import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import {PorPaisPaginaComponent } from './Pages/por-pais-pagina.component';
import { PaisRoutingModule } from './pais-routing.module';
import { PaisTableComponent } from './components/pais-table/pais-table.component';
import { PaisFormComponent } from './forms/pais-forms/pais-forms.component';

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    PaisRoutingModule,
    SharedModule
  ],
  exports: [],
  declarations: [
   PorPaisPaginaComponent,
   PaisTableComponent,
   PaisFormComponent,


  ],
  providers: [],
})
export class PaisModule { }
