import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Pais } from "../interface/pais";
import { PaisService } from "../services/pais.service";

@Component({
    selector: 'pais-form',
    templateUrl: './pais-forms.component.html',
    styles:[

    ]
})
export class PaisFormComponent{
    @Input()
    public paisRecibido?: Pais;
    public id?: number ;
    public idPais?:number;
    public descripcion?: string ;
    public estado?: number
    public paises: Pais = {

        idPais: this.idPais,
        descripcion: this.descripcion,
        estado: this.estado
    };
    @Output() messageEvent  = new EventEmitter<any>();
    @Output() updateEvent  = new EventEmitter<any>();

    submitted = false;
    constructor(private paisService: PaisService){}
    ngOnInit(){
        if (this.paisRecibido?.idPais != undefined){
            console.log('Entre');
            this.paises.idPais = this.paisRecibido.idPais;
            this.paises.descripcion = this.paisRecibido.descripcion;
            this.paises.estado = this.paisRecibido.estado;
        }
    }
     onSubmit() {
        if (this.paises.idPais == undefined){
            // this.muestras.descripcion = this.descripcion;
            // this.muestras.estado = this.estado;
            this.submitted = true;
            // console.log(this.submitted);
            // console.log(this.muestras);
            this.messageEvent.emit(this.paises);
        }else{
            this.submitted = true;
            this.updateEvent.emit(this.paises)
        }


     }
}
