import {apiClient} from "@/core/api/config.ts";
import {API_ENDPOINTS} from "@/core/api";
import type {Contenidos, ContenidosMix} from "@/features/Contenidos/models.ts";

export const ContenidosServices = {
    async get(): Promise<Contenidos> {
        return await apiClient<Contenidos>(API_ENDPOINTS.contenidos);
    },

    async getMix(): Promise<ContenidosMix> {
        return await apiClient<ContenidosMix>(API_ENDPOINTS.mix);
    }
}

