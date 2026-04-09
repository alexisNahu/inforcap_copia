
export const APP_PAGES = {
    // Páginas Generales
    inicio: '/',
    inforcap: '/inforcap',
    formacion_profesional: '/formacion-profesional',
    videos: '/videos',

    // Carreras Técnicas
    carrera_tecnica_panaderia_y_confiteria: '/carreras-tecnicas/panaderia-y-confiteria',

    // Especializaciones
    especializacion_pasteleria_y_confiteria: '/especializaciones/pasteleria-y-confiteria',
    especializacion_decoracion_de_tortas: '/especializaciones/decoracion-de-tortas',

    especializaciones: (slug: string) => `/especializaciones/${slug}`,

    diplomados: (slug: string) => `/diplomados/${slug}`,
    talleres: (slug: string) => `/talleres/${slug}`,
    seminarios: (slug: string) => `/seminarios/${slug}`,
    // Formaciones Profesionales
    capacitacion_personalizada: '/formacion-profesional/capacitacion-personalizada',
    clases_magistrales: '/formacion-profesional/clases-magistrales',
}

const BACKEND_API: string = import.meta.env.PUBLIC_BACKEND_API

export const API = {
    banners: `${BACKEND_API}/api/banners`,
    seminarios: `${BACKEND_API}/api/seminarios`,
    talleres: `${BACKEND_API}/api/talleres`
}



