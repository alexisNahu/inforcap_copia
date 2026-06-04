import React, { useState, useEffect } from 'react';
import { ContenidosServices } from '@/features/Contenidos/services';
import type { ContenidosMix } from "./models";
import ContenidosCard from "@/features/Contenidos/Components/ContenidosCard.tsx";

export default function Contenidos() {
    const [contenidos, setContenidos] = useState<ContenidosMix | null>(null);
    const [loading, setLoading] = useState(true);
    // Estado local para disparar la animación de entrada
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        let isMounted = true;

        async function loadContenidos() {
            try {
                const data: ContenidosMix = await ContenidosServices.getMix();
                if (isMounted) {
                    setContenidos(data);

                    // Pequeño delay para que el DOM real reemplace al Skeleton antes de animar
                    setTimeout(() => {
                        if (isMounted) setIsVisible(true);
                    }, 50);
                }
            } catch (error) {
                console.error("Error cargando las secciones de contenidos:", error);
            } finally {
                if (isMounted) setLoading(false);
            }
        }

        loadContenidos();
        return () => { isMounted = false; };
    }, []);

    // --- SKELETON LOADER: Previene el salto visual mientras descarga de la API ---
    if (loading) {
        return (
            <div className="w-full animate-pulse space-y-16 py-12">
                {[1, 2].map((seccion) => (
                    <div key={seccion} className="max-w-7xl mx-auto px-4">
                        {/* Esqueleto del Encabezado */}
                        <div className="flex flex-col items-center space-y-3 mb-12">
                            <div className="h-8 bg-gray-200 rounded w-1/4" />
                            <div className="h-10 bg-gray-200 rounded w-1/3" />
                            <div className="h-4 bg-gray-200 rounded w-1/2" />
                        </div>
                        {/* Esqueleto del Grid de Tarjetas */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 justify-items-center">
                            {[1, 2, 3, 4].map((tarjeta) => (
                                <div key={tarjeta} className="w-full aspect-[3/4] bg-gray-200 rounded-xl shadow-sm" />
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        );
    }

    // Si la API falla o no devuelve datos, evitamos romper la app
    if (!contenidos) return null;

    // Clase de animación reutilizable controlada por el estado reactivo
    const animationClass = `transition-all duration-1000 ease-out will-change-[opacity,transform] ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
    }`;

    return (
        <>
            {/* --- SECCIÓN DE SEMINARIOS --- */}
            {contenidos.seminarios && contenidos.seminarios.content.length > 0 && (
                <section className={`py-12 bg-transparent ${animationClass}`}>
                    <div className="text-center mb-12 px-8">
                        <h1 className="text-[44px] leading-none tracking-tight font-petrona uppercase text-black font-bold mb-1">
                            {contenidos.seminarios.data.clave}
                        </h1>
                        <h2 className="text-[44px] leading-tight font-bold tracking-tight text-bordoInforcap font-petrona mb-4">
                            {contenidos.seminarios.data.titulo}
                        </h2>
                        <h3
                            className="text-[20px] leading-normal max-w-2xl mx-auto text-slate-600"
                            dangerouslySetInnerHTML={{ __html: contenidos.seminarios.data.descripcion }}
                        />
                    </div>

                    <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 justify-items-center items-start">
                        {contenidos.seminarios.content.map((d: any, i: number) => (
                            <div key={d.slug || i} className="w-full flex justify-center">
                                <ContenidosCard data={d} />
                            </div>
                        ))}
                    </div>
                </section>
            )}

            {/* --- SECCIÓN DE TALLERES (Con fondo #F3F3F3) --- */}
            {contenidos.talleres && contenidos.talleres.content.length > 0 && (
                <section className={`py-12 bg-[#F3F3F3] ${animationClass}`}>
                    <div className="text-center mb-12 px-8">
                        <h1 className="text-[44px] leading-none tracking-tight font-petrona uppercase text-black font-bold mb-1">
                            {contenidos.talleres.data.clave}
                        </h1>
                        <h2 className="text-[44px] leading-tight font-bold tracking-tight text-bordoInforcap font-petrona mb-4">
                            {contenidos.talleres.data.titulo}
                        </h2>
                        <h3
                            className="text-[20px] leading-normal max-w-2xl mx-auto text-slate-600"
                            dangerouslySetInnerHTML={{ __html: contenidos.talleres.data.descripcion }}
                        />
                    </div>

                    <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 justify-items-center items-start">
                        {contenidos.talleres.content.map((d: any, i: number) => (
                            <div key={d.slug || i} className="w-full flex justify-center">
                                <ContenidosCard data={d} />
                            </div>
                        ))}
                    </div>
                </section>
            )}
        </>
    );
}
