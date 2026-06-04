// src/components/FetchData.tsx
import React, { useState, useEffect } from 'react';

interface FetchDataProps<T> {
    // Ahora serviceFn devuelve T (que puede ser un Array O un Objeto como ContenidosMix)
    serviceFn: () => Promise<T>;
    children: (data: T) => React.ReactNode;
}

export function FetchData<T>({ serviceFn, children }: FetchDataProps<T>) {
    const [data, setData] = useState<T | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        let isMounted = true;
        async function loadData() {
            try {
                const response = await serviceFn();
                if (isMounted) setData(response);
            } catch (error) {
                console.error('Error fetching data in FetchData:', error);
            } finally {
                if (isMounted) setLoading(false);
            }
        }
        loadData();
        return () => { isMounted = false; };
    }, [serviceFn]);

    // Si está cargando o no hay datos, no renderizamos nada
    if (loading || data === null) return null;

    return <>{children(data)}</>;
}

export default FetchData;
