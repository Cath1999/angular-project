import { Component, EventEmitter, Input, Output } from '@angular/core'
import { Muestra } from '../interface/muestra'

@Component({
    selector: 'muestra-table',
    templateUrl: './muestra-table.component.html',
    styles: [
    ]
})
export class MuestraTableComponent {
    @Input()
    public muestras: Muestra[] = [];
    @Output() updateEvent = new EventEmitter<any>();
    @Output() deleteEvent  = new EventEmitter<any>();
    
    
    update(m:Muestra){
        this.updateEvent.emit(m);
    }
    
    delete(m:Muestra){
        this.deleteEvent.emit(m);
        
    }
}