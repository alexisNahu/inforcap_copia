import { API } from "@/constants.ts";
import type { Taller } from "./models";

function mapToTaller (obj: any) {
    return obj.map((val: any) => ({...val, aprenderas_html: val.aprenderas_html?.split('-'), slug: val.slug.replace(/[\.;]/g, '')}))
}

export const TallerService = {
    async getAll(): Promise<Taller[]> {
        try {
            const response = await fetch(API.talleres);
            if (!response.ok) throw new Error(`Error HTTP: ${response.status}`);
            const json = await response.json()
            return mapToTaller(json)
        } catch (e: any) {
            console.error(`Error en el getAll de taller: ${e}`);
            throw e;
        }
    },

    async getByIdOrSlug(param: number | string): Promise<Taller> {
        try {
            const response = await fetch(`${API.talleres}/${param}`);
            if (!response.ok) throw new Error(`No se encontró el taller con ID o Parametro ${param}`);
            return await response.json();
        } catch (e: any) {
            console.error(`Error en getByIdOrSlug de taller: ${e}`);
            throw e;
        }
    },

    async create(data: Partial<Taller>): Promise<Taller> {
        try {
            const response = await fetch(API.talleres, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            });
            if (!response.ok) throw new Error('Error al crear el taller');
            return await response.json();
        } catch (e: any) {
            console.error(`Error en create de taller: ${e}`);
            throw e;
        }
    },

    async update(id: number, data: Partial<Taller>): Promise<Taller> {
        try {
            const response = await fetch(`${API.talleres}/${id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            });
            if (!response.ok) throw new Error('Error al actualizar el taller');
            return await response.json();
        } catch (e: any) {
            console.error(`Error en update de taller: ${e}`);
            throw e;
        }
    },

    async delete(id: number): Promise<boolean> {
        try {
            const response = await fetch(`${API.talleres}/${id}`, {
                method: 'DELETE'
            });
            if (!response.ok) throw new Error('Error al eliminar el taller');
            return true;
        } catch (e: any) {
            console.error(`Error en delete de taller: ${e}`);
            throw e;
        }
    }
};
