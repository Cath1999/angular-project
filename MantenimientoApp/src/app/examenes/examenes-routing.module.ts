import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { ExamenesComponent } from './examenes.component';

const routes: Routes=[
    {
        path:'by-examenes',
        component:ExamenesComponent
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
export class ExamenesRoutingModule { }