export interface Examenes{
    idExamen?: number;
    idAreaLabServicio?: number;
    idMetodologia?: number;
    idCategoriaExamenes?: number;
    idTipoMuestra?: number;
    idUnidadMedidas?: number;
    idTipoResultado?: number;
    descripcion?: string;
    descripcionCorta?: string;
    lisCode?: string;
    conteo?: string;
    confidencial?: string;
    calculado?: string;
    estado?: number;


}

export interface AreaLab{
    idAreaLabServicio?: number;
    descripcion?: string;
    estado?: number;
}

export interface Metodologia{
    idMetodologia?: number;
    descripcion?: string;
    estado?: number;
}

export interface Categoria{
    idCategoriaExamenes?: number;
    descripcion?: string;
    estado?: number;
}

export interface TipoMuestra{
    idTipoMuestra?: number;
    descripcion?: string;
    estado?: number;
}

export interface Unidad{
    idUnidadMedidas?: number;
    descripcion?: string;
    estado?: number;
}

export interface Resultado{
    idTipoResultado?: number;
    descripcion?: string;
    estado?: number;
}