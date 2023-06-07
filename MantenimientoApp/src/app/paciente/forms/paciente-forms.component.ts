import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Paciente, Identificacion,Nacionalidad, EstadoCivil, Sexo, Pais, Departamento, Municipio, TipoSangre, Profesion, Religion } from "../interface/paciente"

@Component({
    selector: 'paciente-form',
    templateUrl: './paciente-forms.component.html',
    styles:[

    ]
})
export class PacienteFormComponent{
    @Input()
    public pacienteRecibido?: Paciente;
    public nacionalidades: Nacionalidad[] = [
        {
            idNacionalidad: 1,
            descripcion: 'Nicaraguense'
        },
        {
            idNacionalidad: 2,
            descripcion: 'Hondureño'
        }
    ]; 
    

    public identificaciones: Identificacion[] = [
        {
            idIdentificacion: 1,
            idNacionalidad: 2,
            descripcion: "Cedula",
            estado: 1
        },
        {
            idIdentificacion: 2,
            idNacionalidad: 2,
            descripcion: "Pasaporte",
            estado: 1
        },
    ];

    public estadociviles: EstadoCivil[] = [
        {
            idEstadoCivil: 1,
           
            descripcion: "Soltero",
            estado: 1
        },
        {
            idEstadoCivil: 2,
           
            descripcion: "Casado",
            estado: 1
        },
    ];

    public sexos: Sexo[] = [
        {
            idSexo: 1,
           
            descripcion: "Masculino"
           
        },
        {
            idSexo: 2,
           
            descripcion: "Femenino"
           
        },
    ];

    public paises: Pais[] = [
        {
            idPais: 1,
            descripcion: "Nicaragua",
            estado: 1
           
        },
        {
            idPais: 2,
            descripcion: "Honduras",
            estado: 1
           
        },
    ];

    public departamentos: Departamento[] = [
        {
            idDepartamento: 1,
            idPais: 1,
            descripcion: "Managua",
            estado: 1
        },
        {
            idDepartamento: 2,
            idPais: 1,
            descripcion: "Masaya",
            estado: 1
        },
    ];

    public municipios: Municipio[] = [
        {
            idMunicipio:1,
            idDepartamento: 1,
            descripcion: "Managua",
            estado: 1
        },
        {
            idMunicipio:2,
            idDepartamento: 1,
            descripcion: "Ciudad Sandino",
            estado: 1
        },
    ];

    public sangres: TipoSangre[] = [
        {
            idTipoSangre:1,
            descripcion: "O+"
           
        },
        {
            idTipoSangre:2,
            descripcion: "O-"
        },
    ];

    public profesiones: Profesion[] = [
        {
            idProfesiones:1,
            descripcion: "Ingeniero",
            estado: 1
           
        },
        {
            idProfesiones:2,
            descripcion: "Doctor",
            estado: 1
        },
    ];

    public religiones: Religion[] = [
        {
            idReligion:1,
            descripcion: "Catolico"
           
        },
        {
            idReligion:2,
            descripcion: "Evangelico"
        },
    ];

    public identificacion?: number;
    public numIdentificacion?: string;
    public numExpediente?: number;
    public idEstadoCivil?: number;
    public numINSS?: string;
    public email?: string;
    public idSexo?: number;
    public idNacionalidad?: number;
    public idPaisNac?: number;
    public idDepartamentoNac?: number;
    public idMunicipioNac?: number;
    public idPaisRes?: number;
    public idDepartamentoRes?: number;
    public idMunicipioRes?: number;
    public idTipoSangre?: number;
    public idProfesiones?: number;
    public idReligion?: number;
    public primerNombre?: string;
    public segundoNombre?: string;
    public primerApellido?: string;
    public segundoApellido?: string;
    public fechaNac?: Date;
    public direccionDomiciliar?: string;
    public telefonoDomiciiar?: string;
    public telefonoMovil?: string;
    public activo?: string;
    public embarazada?: string;
    public fallecido?: string;
    public estado?: number;

    public paciente: Paciente = {
        idIdentificacion: this.identificacion,
        numIdentificacion: this.numIdentificacion,
        numExpediente: this.numExpediente,
        numINSS: this.numINSS,
        idEstadoCivil: this.idEstadoCivil,
        email: this.email,
        idSexo: this.idSexo,
        idNacionalidad: this.idNacionalidad,
        idPaisNac: this.idPaisNac,
        idDepartamentoNac: this.idDepartamentoNac,
        idMunicipioNac: this.idMunicipioNac,
        idPaisRes: this.idPaisRes,
        idDepartamentoRes: this.idDepartamentoRes,
        idMunicipioRes: this.idMunicipioRes,
        idTipoSangre: this.idTipoSangre,
        idProfesiones: this.idProfesiones,
        idReligion: this.idReligion,
        primerNombre: this.primerNombre,
        segundoNombre: this.segundoNombre,
        primerApellido: this.primerApellido,
        segundoApellido: this.segundoApellido,
        fechaNac: this.fechaNac,
        direccionDomiciliar: this.direccionDomiciliar,
        telefonoDomiciiar: this.telefonoDomiciiar,
        telefonoMovil: this.telefonoMovil,
        activo: this.activo,
        embarazada: this.embarazada,
        fallecido: this.fallecido,
        estado: this.estado

    };
    submitted = false;
    @Output() messageEvent  = new EventEmitter<any>();
    @Output() updateEvent  = new EventEmitter<any>();

    ngOnInit(){
        if (this.pacienteRecibido?.idPaciente != undefined){
            this.paciente.idPaciente = this.pacienteRecibido.idPaciente;
            this.paciente.idIdentificacion = this.pacienteRecibido.idIdentificacion;
            this.paciente.numIdentificacion= this.pacienteRecibido.numIdentificacion,
            this.paciente.numExpediente= this.pacienteRecibido.numExpediente,
            this.paciente.numINSS= this.pacienteRecibido.numINSS,
            this.paciente.idEstadoCivil= this.pacienteRecibido.idEstadoCivil,
            this.paciente.email= this.pacienteRecibido.email,
            this.paciente.idSexo= this.pacienteRecibido.idSexo,
            this.paciente.idNacionalidad= this.pacienteRecibido.idNacionalidad,
            this.paciente.idPaisNac= this.pacienteRecibido.idPaisNac,
            this.paciente.idDepartamentoNac= this.pacienteRecibido.idDepartamentoNac,
            this.paciente.idMunicipioNac= this.pacienteRecibido.idMunicipioNac,
            this.paciente.idPaisRes= this.pacienteRecibido.idPaisRes,
            this.paciente.idDepartamentoRes= this.pacienteRecibido.idDepartamentoRes,
            this.paciente.idMunicipioRes= this.pacienteRecibido.idMunicipioRes,
            this.paciente.idTipoSangre= this.pacienteRecibido.idTipoSangre,
            this.paciente.idProfesiones= this.pacienteRecibido.idProfesiones,
            this.paciente.idReligion= this.pacienteRecibido.idReligion,
            this.paciente.primerNombre= this.pacienteRecibido.primerNombre,
            this.paciente.segundoNombre= this.pacienteRecibido.segundoNombre,
            this.paciente.primerApellido= this.pacienteRecibido.primerApellido,
            this.paciente.segundoApellido= this.pacienteRecibido.segundoApellido,
            this.paciente.fechaNac= this.pacienteRecibido.fechaNac,
            this.paciente.direccionDomiciliar= this.pacienteRecibido.direccionDomiciliar,
            this.paciente.telefonoDomiciiar= this.pacienteRecibido.telefonoDomiciiar,
            this.paciente.telefonoMovil= this.pacienteRecibido.telefonoMovil,
            this.paciente.activo= this.pacienteRecibido.activo,
            this.paciente.embarazada= this.pacienteRecibido.embarazada,
            this.paciente.fallecido= this.pacienteRecibido.fallecido,
            this.paciente.estado= this.pacienteRecibido.estado
        }
    }
    onSubmit() { 
        if(this.paciente.idPaciente == undefined){
            // console.log('Guardando')
            this.submitted = true;
            // console.log(this.paciente);
            this.messageEvent.emit(this.paciente);
        }else{
            // console.log('Editando')
            this.submitted = true;
            this.updateEvent.emit(this.paciente);
        }
        
    }
    
    
}