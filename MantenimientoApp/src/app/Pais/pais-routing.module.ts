import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PorPaisPaginaComponent } from "./Pages/por-pais-pagina.component"

const routes: Routes=[

  {
    path:'por-pais',
    component:PorPaisPaginaComponent
  }


]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ],
})
export class PaisRoutingModule { }
