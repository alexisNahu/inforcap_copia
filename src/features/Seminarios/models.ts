export interface Seminario {
    id: number;
    slug: string;
    titulo: string;
    imagen_portada: string;
    mes: string;
    dias: string;
    fecha_inicio: string;
    horario: string;
    precio: string;
    estado: number;
    duracion?: string;
    aprenderas_html?: string[];
}
