// hooks/useUpcomingRaces.ts
import { useState, useEffect, useCallback } from "react";
import { racesService } from "../services/races.service";
import type {
    ExtendRaceProcessedData,
    BaseRaceProcessedData,
    UseUpcomingRacesOptions,
} from "@modules/races/race.types";

export const useUpcomingRaces = (options: UseUpcomingRacesOptions = {}) => {
    const { variant = "extend", enabled = true } = options;

    type DataType = typeof variant extends "extend"
        ? ExtendRaceProcessedData[]
        : BaseRaceProcessedData[];

    const [data, setData] = useState<DataType>(() => [] as DataType);
    const [error, setError] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const fetchRaces = useCallback(
        async (signal?: AbortSignal) => {
            try {
                setIsLoading(true);
                setError(null);

                const response =
                    variant === "extend"
                        ? await racesService.getUpcomingRacesExtend()
                        : await racesService.getUpcomingRacesSummary();

                if (signal?.aborted) return;

                if (response.success) {
                    setData(response.data as DataType);
                } else {
                    setError(response.error);
                }
            } catch (err) {
                if (!signal?.aborted) {
                    setError(
                        err instanceof Error
                            ? err.message
                            : "Failed to fetch races"
                    );
                }
            } finally {
                if (!signal?.aborted) {
                    setIsLoading(false);
                }
            }
        },
        [variant]
    );

    useEffect(() => {
        if (!enabled) return;

        const controller = new AbortController();
        fetchRaces(controller.signal);

        return () => controller.abort();
    }, [fetchRaces, enabled]);

    return { data, error, isLoading, refetch: fetchRaces };
};
