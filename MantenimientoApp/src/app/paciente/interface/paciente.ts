export interface Paciente {
    idPaciente?: number;
    idIdentificacion?: number;
    numIdentificacion?: string;
    numExpediente?: number;
    numINSS?: string;
    idEstadoCivil?: number;
    email?: string;
    idSexo?: number;
    idNacionalidad?: number;
    idPaisNac?: number;
    idDepartamentoNac?: number;
    idMunicipioNac?: number;
    idPaisRes?: number;
    idDepartamentoRes?: number;
    idMunicipioRes?: number;
    idTipoSangre?: number;
    idProfesiones?: number;
    idReligion?: number;
    primerNombre?: string;
    segundoNombre?: string;
    primerApellido?: string;
    segundoApellido?: string;
    fechaNac?: Date;
    direccionDomiciliar?: string;
    telefonoDomiciiar?: string;
    telefonoMovil?: string;
    activo?: string;
    embarazada?: string;
    fallecido?: string;
    estado?: number;


}

export interface Identificacion{
    idIdentificacion?: number;
    idNacionalidad?: number;
    descripcion?: string;
    estado?: number;
}

export interface Nacionalidad{
    idNacionalidad?: number;
    descripcion?: string;
}

export interface EstadoCivil{
    idEstadoCivil?: number;
    descripcion?: string;
    estado?: number;
}

export interface Sexo{
    idSexo?: number;
    descripcion?: string;
}

export interface Pais{
    idPais?: number;
    descripcion?: string;
    estado?: number;
}

export interface Departamento{
    idDepartamento?: number;
    idPais?: number;
    descripcion?: string;
    estado?: number;
}

export interface Municipio{
    idMunicipio?: number;
    idDepartamento?: number;
    descripcion?: string;
    estado?: number;
}

export interface TipoSangre{
    idTipoSangre?: number;
    descripcion?: string;
}

export interface Profesion{
    idProfesiones?: number;
    descripcion?: string;
    estado?: number;
}

export interface Religion{
    idReligion?: number;
    descripcion?: string;
}