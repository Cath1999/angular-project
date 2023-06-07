import { Component, EventEmitter, Input, Output } from '@angular/core'
import { DepartamentoV2 } from '../interface/departamentoV2'

@Component({
    selector: 'departamentoV2-table',
    templateUrl: './departamentoV2-table.component.html',
    styles: [
    ]
})
export class DepartamentoV2TableComponent {
    @Input()
    public departamentosV2: DepartamentoV2[] = [];
    @Output() updateEvent = new EventEmitter<any>();
    @Output() deleteEvent  = new EventEmitter<any>();
    
    
    update(d:DepartamentoV2){
        this.updateEvent.emit(d);
    }
    
    delete(d:DepartamentoV2){
        this.deleteEvent.emit(d);
        
    }
}