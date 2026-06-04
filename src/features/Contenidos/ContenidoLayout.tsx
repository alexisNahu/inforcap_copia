import React, { useState, useEffect } from 'react';
import { ContenidosServices } from '@/features/Contenidos/services';
import type { ContenidosMix } from "./models";
import type { Taller } from '@/features/Contenidos/Talleres/models';
import type { Seminario } from '@/features/Contenidos/Seminarios/models';
import '@/styles/global.css';

export function ContenidoLayout() {
    const [data, setData] = useState<Taller | Seminario | null>(null);
    const [loading, setLoading] = useState(true);
    // Estado para controlar la animación de entrada nativa en React
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        let isMounted = true;

        async function loadContenido() {
            try {
                // 1. Leer el Query Param (?slug=...) directamente en el navegador
                const params = new URLSearchParams(window.location.search);
                const slug = params.get('slug');

                // Si no viene ningún slug en la URL, redirigimos al 404
                if (!slug) {
                    window.location.href = '/';
                    return;
                }

                // 2. Ejecutamos el servicio de la API en el cliente
                const contenidos: ContenidosMix = await ContenidosServices.getMix();

                // 3. Mapeamos los contenidos según tu interfaz exacta
                const talleresList = contenidos?.talleres?.content || [];
                const seminariosList = contenidos?.seminarios?.content || [];
                const todosLosContenidos = [...talleresList, ...seminariosList];

                // 4. Buscamos por el slug obtenido del Query Param
                const found = todosLosContenidos.find(item => item?.slug === slug);

                if (isMounted) {
                    if (found) {
                        setData(found);
                        // Cambiamos dinámicamente el título de la pestaña del navegador
                        document.title = `${found.titulo} | Inforcap`;

                        // Pequeño delay de milisegundos para asegurar que el DOM real reemplazó al Skeleton
                        setTimeout(() => {
                            if (isMounted) setIsVisible(true);
                        }, 50);
                    } else {
                        // Si el slug no existe en la BD, mandamos a la página 404
                        window.location.href = '/';
                    }
                }
            } catch (error) {
                console.error('Error cargando el detalle del contenido:', error);
                window.location.href = '/404';
            } finally {
                if (isMounted) setLoading(false);
            }
        }

        loadContenido();
        return () => { isMounted = false; };
    }, []);

    // --- SKELETON LOADER (Mantiene las dimensiones fijas para evitar saltos visuales) ---
    if (loading || !data) {
        return (
            <div className="w-full mt-10 p-4 animate-pulse">
                <div className="max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-12 mx-auto">

                    {/* Esqueleto del Contenedor de Imagen */}
                    <div className="w-full aspect-square rounded-xl bg-gray-200 shadow-md" />

                    {/* Esqueleto del Contenedor de Información */}
                    <div className="w-full space-y-6">
                        <header className="space-y-3">
                            <div className="h-4 bg-gray-200 rounded w-1/4" />
                            <div className="h-10 bg-gray-200 rounded w-3/4" />
                        </header>

                        {/* Esqueleto de Bloques de Horarios */}
                        <div className="flex my-10 gap-x-6">
                            {[1, 2, 3, 4].map((i) => (
                                <div key={i} className="flex-1 space-y-2 border-r border-gray-200 last:border-r-0 pr-4">
                                    <div className="h-3 bg-gray-200 rounded w-1/2" />
                                    <div className="h-6 bg-gray-200 rounded w-full" />
                                </div>
                            ))}
                        </div>

                        {/* Esqueleto del Cuerpo de Texto */}
                        <div className="space-y-3 pt-4">
                            <div className="h-6 bg-gray-200 rounded w-1/3 mb-4" />
                            <div className="h-4 bg-gray-200 rounded w-full" />
                            <div className="h-4 bg-gray-200 rounded w-5/6" />
                        </div>

                        {/* Esqueleto de Botones e Inversión */}
                        <div className="space-y-4 pt-6 border-t border-gray-100">
                            <div className="h-14 bg-gray-200 rounded-xl w-1/3" />
                            <div className="h-14 bg-gray-200 rounded-xl w-full" />
                        </div>
                    </div>

                </div>
            </div>
        );
    }

    // --- VALORES PROCESADOS ---
    const subtitulo = data.tipo === "Taller" ? 'Taller' : 'Seminario';
    const imagenSrc = data.imagen_portada || 'https://images.pexels.com/photos/15587528/pexels-photo-15587528/free-photo-of-comida-azucar-postre-dulce.jpeg';

    // --- INTERFAZ COMPLETA CON ANIMACIÓN DE ENTRADA CONTROLADA ---
    return (
        <div
            className={`w-full mt-10 p-4 transition-all duration-1000 ease-out will-change-[opacity,transform] ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
        >
            <div className="max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-12 mx-auto">

                {/* Contenedor Imagen de Portada */}
                <div className="w-full aspect-square overflow-hidden rounded-xl shadow-lg bg-gray-50">
                    <img
                        src={imagenSrc}
                        alt={data.titulo}
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Contenedor de Información */}
                <div className="w-full">
                    <header>
                        <h2 className="text-base font-medium text-gray-500">{subtitulo}</h2>
                        <h1 className="font-petrona text-4xl md:text-5xl text-bordoInforcap leading-tight">{data.titulo}</h1>
                    </header>

                    {/* Bloque de Horarios y Fechas */}
                    <div className="md:flex my-10 gap-y-4 md:gap-y-0">
                        {[
                            { label: 'Mes', val: data.mes },
                            { label: 'Día', val: data.dias },
                            { label: 'Fecha', val: data.fecha_inicio },
                            { label: 'Hora', val: data.horario }
                        ].map((item, index) => (
                            <div key={index} className="px-6 border-r-2 border-amarilloInforcap last:border-r-0">
                                <p className="text-xs text-gris uppercase tracking-tighter">{item.label}</p>
                                <p className="text-xl font-petrona text-bordoInforcap font-bold">{item.val || 'N/A'}</p>
                            </div>
                        ))}
                    </div>

                    {/* Sección "Aprenderás a elaborar" */}
                    <div className="prose prose-slate max-w-none">
                        <p className="text-2xl mb-4 text-bordoInforcap font-bold font-petrona">Aprenderás a elaborar:</p>

                        <div className="text-base text-gris leading-relaxed mb-8 custom-content">
                            {data.aprenderas_html ? (
                                <ul
                                    className="list-disc space-y-1"
                                    dangerouslySetInnerHTML={{
                                        __html: (() => {
                                            const delimiter = data.aprenderas_html.includes('-') ? '-' : '.';
                                            return data.aprenderas_html
                                                .split(delimiter)
                                                .map((item: string) => item.trim())
                                                .filter((item: string) => item !== "")
                                                .map((item: string) => `<li>${item}</li>`)
                                                .join('');
                                        })()
                                    }}
                                />
                            ) : (
                                <p>Información no disponible por el momento.</p>
                            )}
                        </div>
                    </div>

                    {/* Duración, Inversión y Botón de WhatsApp */}
                    <div className="space-y-6 pt-6 border-t border-gray-100">
                        <p className="text-gris"><strong>Duración:</strong> {data.duracion}</p>

                        <div className="inline-block bg-naranjaInforcap text-white px-6 py-3 rounded-xl shadow-md">
                            <span className="text-sm uppercase block opacity-80">Inversión</span>
                            <span className="text-2xl font-bold">Gs. {data.precio}</span>
                        </div>

                        <a
                            href={`https://wa.me/595983350062?text=Me%20interesa%20el%20Seminario%20${encodeURIComponent(data.titulo)}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-3 bg-amarilloInforcap w-full py-4 uppercase hover:bg-naranjaInforcap text-white transition-all font-bold rounded-xl shadow-lg group"
                        >
                            <i className="fa-brands fa-whatsapp text-2xl"></i>
                            INSCRIBIRSE AHORA
                        </a>
                    </div>

                </div>
            </div>

            {/* Banner Inferior Motivacional */}
            <div className="max-w-7xl mx-auto bg-amarilloInforcap h-auto drop-shadow-xl mt-20 grid grid-cols-1 md:grid-cols-2 rounded-lg pb-10 relative overflow-hidden">
                <div className="w-full rounded-l-lg overflow-hidden z-10">
                    <h1 className="text-4xl p-10 font-bold text-bordoInforcap">¡No pierdas esta oportunidad! Elige tu carrera, elige un futuro mejor.</h1>
                </div>
                <img
                    src="https://images.pexels.com/photos/15587528/pexels-photo-15587528/free-photo-of-comida-azucar-postre-dulce.jpeg"
                    className="absolute inset-0 z-0 h-full w-full object-cover object-right md:object-center opacity-30 md:opacity-100"
                    alt="Decorativo"
                />
            </div>
        </div>
    );
}

export default ContenidoLayout;
