import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { MuestraComponent } from './muestra.component';

const routes: Routes=[
    {
        path:'by-muestra',
        component:MuestraComponent
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
export class MuestraRoutingModule { }