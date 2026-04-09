import {API} from "@/constants.ts";
export const BannerService = {
    getAll: async () => {
        try {
            const response = await fetch(API.banners, {
                method: 'GET',
                headers: {
                    'Cache-Control': 'no-cache',
                },
                cache: 'no-store'
            })

            if (!response.ok) throw new Error('Error en el getAll de banners')
            const json = await response.json()
            console.log(json)
            return json
        } catch (e: any) {
            console.error(e)
            throw e
        }
    }
}
