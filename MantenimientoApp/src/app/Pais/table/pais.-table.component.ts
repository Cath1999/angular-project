import { Component, EventEmitter, Input, Output } from '@angular/core'
import { Pais } from '../interface/pais'

@Component({
    selector: 'pais-table',
    templateUrl: './pais-table.component.html',
    styles: [
    ]
})
export class PaisTableComponent {
    @Input()
    public paises:Pais[] = [];
    @Output() updateEvent = new EventEmitter<any>();
    @Output() deleteEvent  = new EventEmitter<any>();


    update(p:Pais){
        this.updateEvent.emit(p);
    }

    delete(p:Pais){
        this.deleteEvent.emit(p);

    }
}
