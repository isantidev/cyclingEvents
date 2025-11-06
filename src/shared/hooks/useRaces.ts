import { useState, useEffect } from "react";
// Normal imports
import { monthNames, weekdayNames } from "@shared/types/date.types";
import { fetchLimitedRaces } from "@shared/api/races";
import { PostgrestError } from "@supabase/supabase-js";

// Type imports
import type { RaceWithProcessedData } from "@shared/types/race.types";
import type { DateProps } from "@shared/types/date.types";
import { useLocationCache } from "./useLocationCache";

function processDate(dateString: string): DateProps {
    const date = new Date(dateString);

    return {
        day: date.getDate(),
        weekday: weekdayNames[date.getDay()],
        month: monthNames[date.getMonth()],
        year: date.getFullYear(),
    };
}

export const useRaces = () => {
    const [races, setRaces] = useState<RaceWithProcessedData[]>([]);
    const [error, setError] = useState<PostgrestError | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const { getLocation, preloadLocations } = useLocationCache();

    useEffect(() => {
        async function loadRaces() {
            try {
                const { data, error } = await fetchLimitedRaces();

                if (error) {
                    setError(error);
                    return;
                }

                if (!data || data.length === 0) {
                    setRaces([]);
                    return;
                }

                const cityIds = data.map((race) => race.location_city_id);

                console.log(`Preloading locations for ${data.length} races...`);

                await preloadLocations(cityIds);

                const processedRaces = await Promise.all(
                    data.map(async (race) => ({
                        ...race,
                        processedDate: processDate(race.race_date),
                        location: await getLocation(race.location_city_id),
                    }))
                );

                setRaces(processedRaces);
            } catch (err) {
                console.error("Erros loading races: ", err);
                setError(err as PostgrestError);
            } finally {
                setIsLoading(false);
            }
        }
        loadRaces();
    }, [getLocation, preloadLocations]);

    console.log(races);

    return { races, error, isLoading };
};
