import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { PaisComponent } from './pais.component';

const routes: Routes=[
    {
        path:'by-pais',
        component:PaisComponent
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
