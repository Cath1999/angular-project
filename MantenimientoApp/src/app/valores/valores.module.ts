import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ValoresRoutingModule } from "./valores-routing.module";
import { SharedModule } from "../shared/shared.module";
import { ValoresComponent } from "./valores.component";
import { ValoresTableComponent } from "./table/valores-table.component";
import { ValoresFormComponent } from "./forms/valores-forms.component";
import { FormsModule } from "@angular/forms";

@NgModule({
    imports:[
        CommonModule,
        ValoresRoutingModule,
        SharedModule,
        FormsModule      
    ],
    exports:[],
    declarations:[
        ValoresComponent,
        ValoresTableComponent,
        ValoresFormComponent
    ],
    providers: [],
})
export class ValoresModule { }