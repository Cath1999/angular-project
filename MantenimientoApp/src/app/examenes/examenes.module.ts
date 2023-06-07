import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ExamenesRoutingModule } from "./examenes-routing.module";
import { SharedModule } from "../shared/shared.module";
import { ExamenesComponent } from "./examenes.component";
import { ExamenesTableComponent } from "./table/examenes-table.component";
import { ExamenesFormComponent } from "./forms/examenes-forms.component";
import { FormsModule } from "@angular/forms";

@NgModule({
    imports:[
        CommonModule,
        ExamenesRoutingModule,
        SharedModule,
        FormsModule      
    ],
    exports:[],
    declarations:[
        ExamenesComponent,
        ExamenesTableComponent,
        ExamenesFormComponent
    ],
    providers: [],
})
export class ExamenesModule { }