import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MuestraRoutingModule } from "./muestra-routing.module";
import { SharedModule } from "../shared/shared.module";
import { MuestraComponent } from "./muestra.component";
import { MuestraTableComponent } from "./table/muestra-table.component";
import { MuestraFormComponent } from "./forms/muestra-forms.component";
import { FormsModule } from "@angular/forms";

@NgModule({
    imports:[
        CommonModule,
        MuestraRoutingModule,
        SharedModule,
        FormsModule      
    ],
    exports:[],
    declarations:[
        MuestraComponent,
        MuestraTableComponent,
        MuestraFormComponent
    ],
    providers: [],
})
export class MuestraModule { }