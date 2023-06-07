import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Paciente } from "../interface/paciente";

@Component({
    selector: 'paciente-table',
    templateUrl: './paciente-table.component.html',
    styles:[

    ]
})
export class PacienteTableComponent {
    @Input()
    public pacientes: Paciente[] = [];

    @Output() deleteEvent  = new EventEmitter<any>();
    @Output() updateEvent  = new EventEmitter<any>();

    delete(p:Paciente){
        this.deleteEvent.emit(p);
    }

    update(p:Paciente){
        this.updateEvent.emit(p);
    }
}