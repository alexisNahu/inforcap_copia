import React, { useState, useEffect } from 'react';
import { BannerService } from "./services";
import { type Banner as BannerType } from "./models";
import '@/styles/carusel.css';

export function Banner() {
    const [banners, setBanners] = useState<BannerType[]>([]);
    const [loading, setLoading] = useState(true);
    const [currentIndex, setCurrentIndex] = useState(0);
    // Estado local para activar la animación de entrada
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        let isMounted = true;
        async function loadBanners() {
            try {
                const res = await BannerService.getAll();
                if (isMounted) {
                    const sorted = [...res].sort((a, b) => a.orden - b.orden);
                    setBanners(sorted);

                    // Pequeño delay de milisegundos para que el DOM se monte antes de animar
                    setTimeout(() => {
                        if (isMounted) setIsVisible(true);
                    }, 50);
                }
            } catch (error) {
                console.error("Error cargando banners:", error);
            } finally {
                if (isMounted) setLoading(false);
            }
        }
        loadBanners();
        return () => { isMounted = false; };
    }, []);

    useEffect(() => {
        if (banners.length <= 1) return;
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % banners.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [banners]);

    // --- SKELETON: Bloque gris visible desde el segundo cero ---
    if (loading || banners.length === 0) {
        return (
            <div
                className="w-full animate-pulse bg-gray-300 block visual-fallback"
                style={{ minHeight: '350px', height: '50vh', maxHeight: '550px' }}
            />
        );
    }

    const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % banners.length);
    const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + banners.length) % banners.length);

    return (
        /* Usamos clases condicionales de Tailwind controladas por 'isVisible'.
          Replicamos tu clase CSS: transición de 1000ms, suavizado ease-out y will-change.
        */
        <div
            className={`w-full block relative transition-all duration-1000 ease-out will-change-[opacity,transform] ${
                isVisible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 -translate-y-12 md:translate-y-12'
            }`}
        >
            <article id="astroCarouselContainer">
                <div className="relative carousel-container">
                    <div className="overflow-hidden relative">
                        <div
                            className="flex transition-transform duration-500 ease-out"
                            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                        >
                            {banners.map((ban, i) => (
                                <div key={ban.id || i} className="flex-shrink-0 w-full">
                                    <img
                                        src={ban.imagen}
                                        alt={ban.descripcion || "Banner Inforcap"}
                                        className="w-full h-auto min-h-[180px] md:h-[550px] object-cover block"
                                        loading={i === 0 ? "eager" : "lazy"}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Controles de navegación */}
                    {banners.length > 1 && (
                        <>
                            <button
                                onClick={prevSlide}
                                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/80 transition-colors z-10"
                            >
                                ❮
                            </button>
                            <button
                                onClick={nextSlide}
                                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/80 transition-colors z-10"
                            >
                                ❯
                            </button>
                        </>
                    )}
                </div>
            </article>
        </div>
    );
}

export default Banner;
