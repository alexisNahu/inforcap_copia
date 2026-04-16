import type {Taller} from "@/features/Contenidos/Talleres/models.ts";
import {apiClient} from "@/core/api/config.ts";
import {API_ENDPOINTS} from "@/core/api";
import type {Contenidos} from "@/features/Contenidos/models.ts";

export const ContenidosServices = {
    async get(): Promise<Contenidos> {
        return await apiClient<Contenidos>(API_ENDPOINTS.contenidos);
    },
}
