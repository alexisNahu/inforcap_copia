// src/components/Carousel.tsx
import { useState, useEffect, useRef } from 'react';
import { BannerService } from '../Banners/services';
import type { Banner as BannerType } from '../Banners/models.ts'; // Renombrado para evitar conflicto con el componente

export function Banner() {
    const [banners, setBanners] = useState<BannerType[]>([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPlaying, setIsPlaying] = useState(true);
    const [loading, setLoading] = useState(true);
    const trackRef = useRef<HTMLDivElement>(null);

    // 1. Cargar banners al montar el componente
    useEffect(() => {
        let isMounted = true;
        async function loadBanners() {
            try {
                const data = await BannerService.getAll();
                const ordenados = data.sort((a, b) => a.orden - b.orden);
                if (isMounted) setBanners(ordenados);
            } catch (error) {
                console.error('Error loading banners:', error);
            } finally {
                if (isMounted) setLoading(false);
            }
        }

        loadBanners();
        return () => { isMounted = false; };
    }, []);

    const totalSlides = banners.length;

    // 2. Efecto para manejar el Auto-Play de forma segura
    useEffect(() => {
        if (!isPlaying || totalSlides <= 1) return;

        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % totalSlides);
        }, 5000);

        return () => clearInterval(interval);
    }, [isPlaying, totalSlides, currentIndex]); // Al incluir currentIndex, el timer se reinicia limpiamente en cada cambio

    // 3. Efecto para actualizar la posición visual en el DOM
    useEffect(() => {
        if (trackRef.current) {
            const offset = -currentIndex * 100;
            trackRef.current.style.transform = `translateX(${offset}%)`;
        }
    }, [currentIndex]);

    // Mostrar loading o nada si no hay banners
    if (loading || totalSlides === 0) return null;

    // Manejadores de eventos simplificados
    const handlePrevClick = () => {
        setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
    };

    const handleNextClick = () => {
        setCurrentIndex((prev) => (prev + 1) % totalSlides);
    };

    return (
        <div
            className="relative carousel-container w-full overflow-hidden"
            onMouseEnter={() => setIsPlaying(false)}
            onMouseLeave={() => setIsPlaying(true)}
        >
            <div className="overflow-hidden relative w-full">
                <div
                    ref={trackRef}
                    className="flex transition-transform duration-500 ease-out w-full"
                >
                    {banners.map((ban, i) => (
                        <div key={ban.id || i} className="flex-shrink-0 w-full" data-carousel-slide={i}>
                            <img
                                src={ban.imagen}
                                alt={ban.descripcion || 'Banner'}
                                className="w-full h-auto min-h-[180px] md:h-[550px] object-cover"
                                loading={i === 0 ? "eager" : "lazy"}
                            />
                        </div>
                    ))}
                </div>
            </div>

            {totalSlides > 1 && (
                <>
                    <button
                        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors z-10"
                        onClick={handlePrevClick}
                        aria-label="Previous"
                    >
                        ❮
                    </button>
                    <button
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors z-10"
                        onClick={handleNextClick}
                        aria-label="Next"
                    >
                        ❯
                    </button>

                    {/* Indicadores/dots */}
                    <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-10">
                        {banners.map((_, i) => (
                            <button
                                key={i}
                                className={`w-2 h-2 rounded-full transition-all ${
                                    i === currentIndex ? 'bg-white w-4' : 'bg-white/50'
                                }`}
                                onClick={() => setCurrentIndex(i)}
                                aria-label={`Go to slide ${i + 1}`}
                            />
                        ))}
                    </div>
                </>
            )}
        </div>
    );
}
