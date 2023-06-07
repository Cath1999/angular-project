import { Component, EventEmitter, Input, Output } from '@angular/core'
import { Examenes } from '../interface/examenes'

@Component({
    selector: 'examenes-table',
    templateUrl: './examenes-table.component.html',
    styles: [
    ]
})
export class ExamenesTableComponent {
    @Input()
    public examenes: Examenes[] = [];
    @Output() updateEvent = new EventEmitter<any>();
    @Output() deleteEvent  = new EventEmitter<any>();
    
    
    update(e:Examenes){
        this.updateEvent.emit(e);
    }
    
    delete(e:Examenes){
        this.deleteEvent.emit(e);
        
    }
}