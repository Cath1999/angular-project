import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { ValoresComponent } from './valores.component';

const routes: Routes=[
    {
        path:'by-valores',
        component:ValoresComponent
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
export class ValoresRoutingModule { }