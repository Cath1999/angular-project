import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { PacienteRoutingModule } from "./paciente-routing.module";
import { SharedModule } from "../shared/shared.module";
import { FormsModule } from "@angular/forms";
import { PacienteComponent } from "./paciente.component";
import { PacienteTableComponent } from "./table/paciente-table.component";
import { PacienteFormComponent } from "./forms/paciente-forms.component";

@NgModule({
    imports:[
        CommonModule,
        PacienteRoutingModule,
        SharedModule,
        FormsModule
        
    ],
    exports:[],
    declarations:[
        PacienteComponent,
        PacienteTableComponent,
        PacienteFormComponent
    ],
    providers: [],
})
export class PacienteModule { }