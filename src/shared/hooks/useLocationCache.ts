// hooks/useLocationCache.ts
import { useState, useCallback } from "react";
import { fetchCityAndDepartment } from "@shared/api/colombiaData";
import type { LocationProps } from "@shared/types/race.types";

const globalCache = new Map<number, LocationProps>();

export const useLocationCache = () => {
    // useState con función lazy para inicializar solo una vez
    const [cache] = useState(() => globalCache);

    const getLocation = useCallback(
        async (city_id: number): Promise<LocationProps> => {
            // Cache hit: retornar inmediatamente
            if (cache.has(city_id)) {
                console.log(`✅ Cache HIT for city_id: ${city_id}`);
                return cache.get(city_id)!;
            }

            // Cache miss: hacer fetch
            console.log(`⬇️ Cache MISS for city_id: ${city_id} - Fetching...`);

            try {
                const data = await fetchCityAndDepartment(city_id);
                const location: LocationProps = {
                    city: data.city_name,
                    department: data.Departments.department_name,
                };

                // Guardar en caché para futuros usos
                cache.set(city_id, location);
                console.log(`💾 Cached city_id: ${city_id} - ${location.city}`);

                return location;
            } catch (error) {
                console.error(
                    `❌ Error fetching location for city_id ${city_id}:`,
                    error
                );

                // Retornar ubicación por defecto en caso de error
                const fallbackLocation: LocationProps = {
                    city: "Desconocida",
                    department: "Desconocido",
                };

                return fallbackLocation;
            }
        },
        [cache]
    );

    const preloadLocations = useCallback(
        async (cityIds: number[]): Promise<void> => {
            // 1. Eliminar duplicados con Set
            // 2. Filtrar solo los que NO están en caché
            const uniqueIds = [...new Set(cityIds)].filter(
                (id) => !cache.has(id)
            );

            if (uniqueIds.length === 0) {
                console.log("🎯 All locations already in cache");
                return;
            }

            console.log(
                `🔄 Preloading ${uniqueIds.length} locations:`,
                uniqueIds
            );

            // Fetchear todas en paralelo con Promise.all
            try {
                await Promise.all(uniqueIds.map((id) => getLocation(id)));
                console.log(
                    `✨ Successfully preloaded ${uniqueIds.length} locations`
                );
            } catch (error) {
                console.error("❌ Error preloading locations:", error);
                // No lanzamos el error, algunas ubicaciones pueden haberse cargado
            }
        },
        [cache, getLocation]
    );

    const clearCache = useCallback(() => {
        const previousSize = cache.size;
        cache.clear();
        console.log(`🗑️ Cache cleared - Removed ${previousSize} entries`);
    }, [cache]);

    const hasLocation = useCallback(
        (city_id: number): boolean => {
            return cache.has(city_id);
        },
        [cache]
    );

    return {
        getLocation,
        preloadLocations,
        clearCache,
        hasLocation,
        cacheSize: cache.size,
    };
};
