export interface Contenidos {
    seminarios: ContenidoDetalle,
    talleres: ContenidoDetalle
}

export interface ContenidoDetalle {
    clave: string;
    titulo: string;
    descripcion: string;
}
