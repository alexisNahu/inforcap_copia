import type {Taller} from "@/features/Contenidos/Talleres/models.ts";
import type {Seminario} from "@/features/Contenidos/Seminarios/models.ts";
import type {Data} from "@/core/models";

export interface Contenidos {
    seminarios: ContenidoDetalle,
    talleres: ContenidoDetalle
}

export interface ContenidoDetalle {
    clave: string;
    titulo: string;
    descripcion: string;
}

export interface ContenidosData extends Data {
    clave: string
}

export interface ContenidosMix {
    talleres?: {
        data: ContenidosData
        content: Taller[]
    },
    seminarios?: {
        data: ContenidosData
        content: Seminario[]
    }
}
