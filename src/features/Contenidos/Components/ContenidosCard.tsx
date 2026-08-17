import React from 'react';
import {APP_PAGES} from "@/core/pages.ts";

// Interfaces basadas en tu código original
interface BaseCurso {
    titulo: string;
    slug: string;
    imagen_portada: string | null;
    precio: number | string;
    dias: string;
    fecha_inicio: string;
    horario: string;
    tipo: 'Seminario' | 'Taller' | string;
}

interface Props {
    data: BaseCurso;
    // verMasHref?: string; // Mantenido por si acaso, aunque no se use en tu lógica actual
}

// Mock de la utilidad remota en caso de que la imagen sea nula
const REMOTE_IMAGE_SRC_DEFAULT = "/placeholder-image.jpg";


export const TarjetaCurso: React.FC<Props> = ({ data }) => {
    const esTaller = data.tipo === 'Seminario';
    const colorBoton = esTaller ? "#FFC700" : "#FF8A00";
    const detalleHref = APP_PAGES.contenido(data.slug);

    return (
        <div className="w-full flex flex-col h-full min-h-[650px] bg-white rounded-md overflow-hidden shadow-lg transition-transform hover:scale-[1.01] duration-300 border border-slate-100">

            {/* 1. Envolvemos Imagen e Info en un contenedor que use todo el espacio menos el botón */}
            <div className="flex flex-col flex-grow">

                {/* Imagen: Usamos basis-1/2 para que ocupe el 50% de este sub-contenedor */}
                <a
                    href={detalleHref}
                    className="h-[260px] shrink-0 overflow-hidden border-b-[3px] border-slate-400/30 block"
                >
                    <img
                        src={data.imagen_portada ?? REMOTE_IMAGE_SRC_DEFAULT}
                        alt={data.titulo}
                        width={400}
                        height={325}
                        className="w-full h-full object-cover"
                    />
                </a>
                {/* Información: altura fija de imagen arriba, esta sección ocupa el resto */}
                <div className="flex-1 flex flex-col pt-4 font-petrona w-full justify-start px-6 pb-4">
          <span className="text-[16px] uppercase text-[#A6A6A6] font-body mb-1 block">
            {esTaller ? 'Seminario' : 'CLASES DE UN DÍA'}
          </span>

                    <a href={detalleHref} className="block hover:text-bordoInforcap transition-colors">
                        <h3 className="font-petrona text-[33px] leading-[1.2] mb-2 line-clamp-2 h-[80px] flex items-start">
                            {data.titulo}
                        </h3>
                    </a>

                    <div className="text-[27px] font-body text-naranjaInforcap mb-4">
                        Gs. {data.precio}
                    </div>

                    <div className="flex flex-col gap-y-2 text-[20px] font-petrona my-auto">
                        <div className="flex items-center gap-3">
                            <i className="fa-regular fa-circle-dot text-slate-300 text-sm"></i>
                            <span>{data.dias}</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <i className="fa-regular fa-calendar text-slate-300 text-sm"></i>
                            <span>{data.fecha_inicio}</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <i className="fa-regular fa-clock text-slate-300 text-sm"></i>
                            <span>{data.horario}</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* 2. Botón: Queda fuera del flujo de los "basis-1/2" */}
            <a
                href={`https://wa.me/595983350062?text=Me%20interesa%20el%20curso:%20${encodeURIComponent(data.titulo)}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{ backgroundColor: colorBoton }}
                className="w-full py-2 text-center font-body text-white text-[20px] uppercase transition-opacity hover:opacity-90 flex justify-center items-center shrink-0"
            >
                <span>INSCRIBIRSE</span>
            </a>
        </div>
    );
};

export default TarjetaCurso;
