import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Muestra } from "../interface/muestra";
import { MuestrasService } from "../services/muestras.service";

@Component({
    selector: 'muestra-form',
    templateUrl: './muestra-forms.component.html',
    styles:[

    ]
})
export class MuestraFormComponent{
    @Input()
    public muestraRecibida?: Muestra;
    public id?: number ;
    public descripcion?: string ;
    public estado?: number
    public muestras: Muestra = {
        idTipoMuestra: this.id,
        descripcion: this.descripcion,
        estado: this.estado
    };
    @Output() messageEvent  = new EventEmitter<any>();
    @Output() updateEvent  = new EventEmitter<any>();

    submitted = false;
    constructor(private muestraService: MuestrasService){}
    ngOnInit(){
        if (this.muestraRecibida?.idTipoMuestra != undefined){
            console.log('Entre');
            this.muestras.idTipoMuestra = this.muestraRecibida.idTipoMuestra;
            this.muestras.descripcion = this.muestraRecibida.descripcion;
            this.muestras.estado = this.muestraRecibida.estado;
        }
    }
     onSubmit() { 
        if (this.muestras.idTipoMuestra == undefined){
            // this.muestras.descripcion = this.descripcion;
            // this.muestras.estado = this.estado;
            this.submitted = true;
            // console.log(this.submitted);
            // console.log(this.muestras);
            this.messageEvent.emit(this.muestras);
        }else{
            this.submitted = true;
            this.updateEvent.emit(this.muestras)
        }
        
       
     }
}