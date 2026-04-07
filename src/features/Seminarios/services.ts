import { API } from "@/constants.ts";
import type { Seminario } from "./models";

function mapToSeminarios(obj: any) {
    if (!Array.isArray(obj)) return [];

    const nuevo = obj.map((val: any) => ({
        ...val,
        aprenderas_html: val.aprenderas_html ? val.aprenderas_html.split('-') : [],

        slug: val.slug ? val.slug.replace(/[\.;]/g, '') : ''
    }));

    console.log("Seminarios mapeados:", nuevo);
    return nuevo;
}

export const SeminarioService = {
    async getAll(): Promise<Seminario[]> {
        try {
            const response = await fetch(API.seminarios);
            if (!response.ok) throw new Error(`Error HTTP: ${response.status}`);
            const json = await response.json()
            return mapToSeminarios(json);
        } catch (e: any) {
            console.error(`Error en el getAll de seminarios: ${e}`);
            throw e;
        }
    },

    async getByIdOrSlug(param: number | string): Promise<Seminario> {
        try {
            const response = await fetch(`${API.seminarios}/${param}`);
            if (!response.ok) throw new Error(`No se encontró el seminario con ID o Parametro ${param}`);
            return await response.json();
        } catch (e: any) {
            console.error(`Error en getByIdOrSlug de seminarios: ${e}`);
            throw e;
        }
    },

    async create(data: Partial<Seminario>): Promise<Seminario> {
        try {
            const response = await fetch(API.seminarios, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            });
            if (!response.ok) throw new Error('Error al crear el seminario');
            return await response.json();
        } catch (e: any) {
            console.error(`Error en create de seminarios: ${e}`);
            throw e;
        }
    },

    async update(id: number, data: Partial<Seminario>): Promise<Seminario> {
        try {
            const response = await fetch(`${API.seminarios}/${id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            });
            if (!response.ok) throw new Error('Error al actualizar el seminario');
            return await response.json();
        } catch (e: any) {
            console.error(`Error en update de seminarios: ${e}`);
            throw e;
        }
    },

    async delete(id: number): Promise<boolean> {
        try {
            const response = await fetch(`${API.seminarios}/${id}`, {
                method: 'DELETE'
            });
            if (!response.ok) throw new Error('Error al eliminar el seminario');
            return true;
        } catch (e: any) {
            console.error(`Error en delete de seminarios: ${e}`);
            throw e;
        }
    }
};
