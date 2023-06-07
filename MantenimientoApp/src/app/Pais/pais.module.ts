import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { PaisRoutingModule } from "./pais-routing.module";
import { SharedModule } from "../shared/shared.module";

import { FormsModule } from "@angular/forms";
import { PaisComponent } from "./pais.component";
import { PaisTableComponent } from "./table/pais.-table.component";
import { PaisFormComponent } from "./forms/pais-forms.component";

@NgModule({
    imports:[
        CommonModule,
       PaisRoutingModule,
        SharedModule,
        FormsModule
    ],
    exports:[],
    declarations:[
        PaisComponent,
        PaisTableComponent,
        PaisFormComponent
    ],
    providers: [],
})
export class PaisModule { }
