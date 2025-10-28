import type { RaceWithProcessedDate } from "@shared/types/race.types";
import type { DateProps } from "@shared/types/date.types";
import { monthNames, weekdayNames } from "@shared/types/date.types";
import { useState, useEffect } from "react";
import { fetchLimitedRaces } from "@shared/api/races";
import { PostgrestError } from "@supabase/supabase-js";

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
    const [races, setRaces] = useState<RaceWithProcessedDate[]>([]);
    const [error, setError] = useState<PostgrestError | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        async function loadRaces() {
            const { data, error } = await fetchLimitedRaces();
            if (!error && data) {
                const RaceWithProcessedDate: RaceWithProcessedDate[] = data.map(
                    (race) => ({
                        ...race,
                        processedDate: processDate(race?.race_date),
                    })
                );
                setRaces(RaceWithProcessedDate);
            } else {
                setError(error);
            }
            setIsLoading(false);
        }
        loadRaces();
    }, []);

    return { races, error, isLoading };
};
