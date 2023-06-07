
import { RouterModule, Routes } from "@angular/router";
import { PacienteComponent } from "./paciente.component";
import { NgModule } from "@angular/core";

const routes : Routes=[
    {
        path:'by-paciente',
        component: PacienteComponent
    }
]

@NgModule({
    imports:[
        RouterModule.forChild(routes)
    ],
    exports:[
        RouterModule
    ],
})
export class PacienteRoutingModule { }