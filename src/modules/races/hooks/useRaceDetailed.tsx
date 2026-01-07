import { useCallback, useEffect, useState } from "react";
import { racesService } from "@modules/races/services/races.service";
import type { ExtendRaceProcessedData } from "../race.types";

// hooks/useRaceDetail.ts
export const useRaceDetail = (
    race_id: number | null,
    options: { enabled?: boolean } = {}
) => {
    const { enabled = true } = options;

    const [data, setData] = useState<ExtendRaceProcessedData | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const fetchRace = useCallback(
        async (signal?: AbortSignal) => {
            if (!race_id) return;

            try {
                setIsLoading(true);
                setError(null);

                const response = await racesService.getRaceInfo(race_id);

                if (signal?.aborted) return;

                if (response!.success) {
                    setData(response!.data);
                } else {
                    setError(response!.error);
                }
            } catch (err) {
                if (!signal?.aborted) {
                    setError(
                        err instanceof Error
                            ? err.message
                            : "Failed to fetch race"
                    );
                }
            } finally {
                if (!signal?.aborted) {
                    setIsLoading(false);
                }
            }
        },
        [race_id]
    );

    useEffect(() => {
        if (!enabled || !race_id) return;

        const controller = new AbortController();
        fetchRace(controller.signal);

        return () => controller.abort();
    }, [fetchRace, enabled, race_id]);

    return { data, error, isLoading, refetch: fetchRace };
};
