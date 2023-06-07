import { Component, EventEmitter, Input, Output } from "@angular/core";
import { ValoresService } from "../services/valores.service";
import { Sexo  } from "../interface/valores";
import { Valores } from "src/app/valores/interface/valores";

@Component({
    selector: 'valores-form',
    templateUrl: './valores-forms.component.html',
    styles:[

    ]
})

export class ValoresFormComponent{
    @Input()
    public valoresRecibida?: Valores;

    public sexos: Sexo[] = [
        {
            idSexo: 1,
           
            descripcion: "Femenino",
            estado: 1
        },
        {
            idSexo: 2,
           
            descripcion: "Masculino",
            estado: 1
        },

    ];


    public idValoresNormales?: number ;
    public idExamen?: number;
    public idSexo?: number;
    public rangoAlto?: number;
    public rangoBajo?: number;
    public estado?: number
    public valores: Valores = {
        idValoresNormales: this.idValoresNormales,
        idExamen: this.idExamen,
        idSexo: this.idSexo,
        rangoAlto: this.rangoAlto,
        rangoBajo: this.rangoBajo,
        estado: this.estado
    };
    @Output() messageEvent  = new EventEmitter<any>();
    @Output() updateEvent  = new EventEmitter<any>();

    submitted = false;
    constructor(private valoresService: ValoresService){}
    ngOnInit(){
        if (this.valoresRecibida?.idValoresNormales != undefined){
            console.log('Entre');
            this.valores.idValoresNormales = this.valoresRecibida.idValoresNormales;
            this.valores.idExamen = this.valoresRecibida.idExamen;
            this.valores.idSexo = this.valoresRecibida.idSexo;
            this.valores.rangoAlto = this.valoresRecibida.rangoAlto;
            this.valores.rangoBajo = this.valoresRecibida.rangoBajo;
            this.valores.estado = this.valoresRecibida.estado;
        }
    }

    onSubmit() { 
        if (this.valores.idValoresNormales == undefined){
            // this.examenes.descripcion = this.descripcion;
            // this.examenes.estado = this.estado;
            this.submitted = true;
            // console.log(this.submitted);
            // console.log(this.examenes);
            this.messageEvent.emit(this.valores);
        }else{
            this.submitted = true;
            this.updateEvent.emit(this.valores)
        }
        
       
    }
}