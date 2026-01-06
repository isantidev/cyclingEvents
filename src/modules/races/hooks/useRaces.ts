import { useState, useEffect, useCallback } from "react";
import { racesService } from "../services/races.service";
import type { RaceWithProcessedData } from "@modules/races/race.types";

export const useRaces = () => {
    const [races, setRaces] = useState<RaceWithProcessedData[]>([]);
    const [error, setError] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    const fetchRaces = useCallback(async (signal?: AbortSignal) => {
        try {
            setIsLoading(true);
            setError(null); // Clear previous errors on new fetch

            const response = await racesService.getUpcomingRaces();

            // Check abort before updating state
            if (signal?.aborted) return;

            if (response.success) {
                console.log(response.data);
                setRaces(response.data);
            } else {
                setError(response.error);
            }
        } catch (err) {
            // Only update error state if not aborted
            if (!signal?.aborted) {
                setError(
                    err instanceof Error ? err.message : "Failed to fetch races"
                );
            }
        } finally {
            // Only update loading state if not aborted
            if (!signal?.aborted) {
                setIsLoading(false);
            }
        }
    }, []);

    useEffect(() => {
        const controller = new AbortController();
        fetchRaces(controller.signal);

        return () => controller.abort();
    }, [fetchRaces]);

    return { races, error, isLoading, refetch: fetchRaces };
};
