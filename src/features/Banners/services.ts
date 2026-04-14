import {apiClient} from "@/core/api/config.ts";
import type {Banner} from "@/features/Banners/models.ts";
import {API_ENDPOINTS} from "@/core/api";

export const BannerService = {
    getAll: async (): Promise<Banner[]> => await apiClient<Banner[]>(API_ENDPOINTS.banners),
}
