import type { Seminario } from "./models";
import { apiClient } from "@/core/api/config";
import { API_ENDPOINTS } from "@/core/api";

function mapToSeminario(data: any): Seminario {
    const process = (val: any) => ({
        ...val,
        slug: val.slug?.replace(/[\.;]/g, '') ?? '',
        aprenderas_html: val.aprenderas_html ? val.aprenderas_html.split('.') : [],
        tipo: 'Seminario' as const
    });

    return Array.isArray(data) ? data.map(process) : process(data);
}

export const SeminarioService = {
    async getAll(): Promise<Seminario[]> {
        const data = await apiClient<any[]>(API_ENDPOINTS.seminarios);
        return mapToSeminario(data) as unknown as Seminario[];
    },

    async getByIdOrSlug(param: number | string): Promise<Seminario> {
        const data = await apiClient<any>(`${API_ENDPOINTS.seminarios}/${param}`);
        return mapToSeminario(data) as Seminario;
    },

    async create(data: Partial<Seminario>): Promise<Seminario> {
        const result = await apiClient<any>(API_ENDPOINTS.seminarios, {
            method: 'POST',
            body: JSON.stringify(data)
        });
        return mapToSeminario(result) as Seminario;
    },

    async update(id: number, data: Partial<Seminario>): Promise<Seminario> {
        const result = await apiClient<any>(`${API_ENDPOINTS.seminarios}/${id}`, {
            method: 'PUT',
            body: JSON.stringify(data)
        });
        return mapToSeminario(result) as Seminario;
    },

    async delete(id: number): Promise<boolean> {
        await apiClient<void>(`${API_ENDPOINTS.seminarios}/${id}`, {
            method: 'DELETE'
        });
        return true;
    }
};
