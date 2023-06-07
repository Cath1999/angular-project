import { Component, EventEmitter, Input, Output } from '@angular/core'
import { Valores } from '../interface/valores'

@Component({
    selector: 'valores-table',
    templateUrl: './valores-table.component.html',
    styles: [
    ]
})
export class ValoresTableComponent {
    @Input()
    public valores: Valores[] = [];
    @Output() updateEvent = new EventEmitter<any>();
    @Output() deleteEvent  = new EventEmitter<any>();
    
    
    update(v:Valores){
        this.updateEvent.emit(v);
    }
    
    delete(v:Valores){
        this.deleteEvent.emit(v);
        
    }
}