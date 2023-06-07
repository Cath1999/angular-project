import { Component, Input } from '@angular/core'
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
}