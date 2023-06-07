import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { DepartamentoV2Component } from './departamentoV2.component';

const routes: Routes=[
    {
        path:'by-departamentoV2',
        component:DepartamentoV2Component
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
export class DepartamentoV2RoutingModule { }