import {apiClient} from "@/core/api/config.ts";
import {API_ENDPOINTS} from "@/core/api";
import type {Contenidos, ContenidosMix} from "@/features/Contenidos/models.ts";

function separeString(data: string) {

}

export const ContenidosServices = {
    async get(): Promise<Contenidos> {
        return await apiClient<Contenidos>(API_ENDPOINTS.contenidos);
    },

    async getMix(): Promise<ContenidosMix> {
        const response = await apiClient<ContenidosMix>(API_ENDPOINTS.mix);
        response.talleres?.content && response.talleres.content.map(d => d.aprenderas_html?.split('-'))
        response.seminarios?.content && response.seminarios.content.map(d => d.aprenderas_html?.split('-'))

        return response
    }
}

