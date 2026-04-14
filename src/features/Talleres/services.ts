import { apiClient } from "@/core/api/config";
import { API_ENDPOINTS } from "@/core/api";
import type { Taller } from "./models";

function mapToTaller(data: any): Taller {
    const process = (val: any) => ({
        ...val,
        slug: val.slug?.replace(/[\.;]/g, '') ?? '',
        aprenderas_html: val.aprenderas_html ? val.aprenderas_html.split('-') : [],
        tipo: 'Taller' as const
    });

    return Array.isArray(data) ? data.map(process) : process(data);
}

export const TallerService = {
    async getAll(): Promise<Taller[]> {
        const data = await apiClient<any[]>(API_ENDPOINTS.talleres);
        return mapToTaller(data) as unknown as Taller[];
    },

    async getByIdOrSlug(param: number | string): Promise<Taller> {
        const data = await apiClient<any>(`${API_ENDPOINTS.talleres}/${param}`);
        return mapToTaller(data) as Taller;
    }
};
