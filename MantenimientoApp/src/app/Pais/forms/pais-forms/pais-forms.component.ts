import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Pais} from "../../interface/pais";
import { PaisService } from "../../services/pais.service";

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
    public descripcion?: string ;
    public estado?: number
    public pais: Pais = {
        IdPais: this.id,
        descripcion: this.descripcion,
        estado: this.estado
    };
    @Output() messageEvent  = new EventEmitter<any>();
    @Output() updateEvent  = new EventEmitter<any>();

    submitted = false;
    constructor(private paisService:  PaisService){}
    ngOnInit(){
        if (this.paisRecibido?.IdPais != undefined){
            console.log('Entre');
            this.pais.IdPais = this.paisRecibido.IdPais;
            this.pais.descripcion = this.paisRecibido.descripcion;
            this.pais.estado = this.paisRecibido.estado;
        }
    }
     onSubmit() {
        if (this.pais.IdPais == undefined){
            // this.pais.descripcion = this.descripcion;
            // this.pais.estado = this.estado;
            this.submitted = true;
            // console.log(this.submitted);
            // console.log(this.pais);
            this.messageEvent.emit(this.pais);
        }else{
            this.submitted = true;
            this.updateEvent.emit(this.pais)
        }


     }
}
