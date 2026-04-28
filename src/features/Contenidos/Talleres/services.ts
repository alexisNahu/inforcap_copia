import {apiClient} from "@/core/api/config.ts";
import {API_ENDPOINTS} from "@/core/api";
import type {Taller} from "./models.ts";


export const TallerService = {
    async getAll(): Promise<Taller[]> {
        return await apiClient<any[]>(API_ENDPOINTS.talleres);
    },

    async getByIdOrSlug(param: number | string): Promise<Taller> {
        return await apiClient<any>(`${API_ENDPOINTS.talleres}/${param}`);
    }
};
