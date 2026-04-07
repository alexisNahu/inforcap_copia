import {API} from "@/constants.ts";

export const BannerService = {
    getAll: async () => {
        try {
            const response = await fetch(API.banners)
            if (!response.ok) throw new Error('Error en el getAll de banners')
            return await response.json()
        } catch (e: any) {
            console.error(e)
            throw e
        }
    }
}
