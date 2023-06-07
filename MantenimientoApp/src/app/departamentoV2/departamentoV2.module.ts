import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { DepartamentoV2RoutingModule } from "./departamentoV2-routing.module";
import { SharedModule } from "../shared/shared.module";
import { DepartamentoV2Component } from "./departamentoV2.component";
import { DepartamentoV2TableComponent } from "./table/departamentoV2-table.component";
import { DepartamentoV2FormComponent } from "./forms/departamentoV2-forms.component";
import { FormsModule } from "@angular/forms";

@NgModule({
    imports:[
        CommonModule,
        DepartamentoV2RoutingModule,
        SharedModule,
        FormsModule      
    ],
    exports:[],
    declarations:[
        DepartamentoV2Component,
        DepartamentoV2TableComponent,
        DepartamentoV2FormComponent
    ],
    providers: [],
})
export class DepartamentoV2Module { }