import { Component, EventEmitter, Input, Output } from "@angular/core";
import { DepartamentoV2 } from "../interface/departamentoV2";
import { DepartamentoV2Service } from "../service/departamentoV2.service";

@Component({
    selector: 'departamentoV2-form',
    templateUrl: './departamentoV2-forms.component.html',
    styles:[

    ]
})
export class DepartamentoV2FormComponent{
    @Input()
    public departamentoV2Recibida?: DepartamentoV2;
    public id?: number ;
    public idPais?:number;
    public descripcion?: string ;
    public estado?: number
    public departamentoV2: DepartamentoV2 = {
        idDepartamento: this.id,
        idPais: this.idPais,
        descripcion: this.descripcion,
        estado: this.estado
    };
    @Output() messageEvent  = new EventEmitter<any>();
    @Output() updateEvent  = new EventEmitter<any>();

    submitted = false;
    constructor(private departamentoV2Service: DepartamentoV2Service){}
    ngOnInit(){
        if (this.departamentoV2Recibida?.idDepartamento != undefined){
            console.log('Entre');
            this.departamentoV2.idDepartamento = this.departamentoV2Recibida.idDepartamento;
            this.departamentoV2.idPais = this.departamentoV2Recibida.idPais;
            this.departamentoV2.descripcion = this.departamentoV2Recibida.descripcion;
            this.departamentoV2.estado = this.departamentoV2Recibida.estado;
        }
    }
     onSubmit() { 
        if (this.departamentoV2.idDepartamento == undefined){
            // this.muestras.descripcion = this.descripcion;
            // this.muestras.estado = this.estado;
            this.submitted = true;
            // console.log(this.submitted);
            // console.log(this.muestras);
            this.messageEvent.emit(this.departamentoV2);
        }else{
            this.submitted = true;
            this.updateEvent.emit(this.departamentoV2)
        }
        
       
     }
}