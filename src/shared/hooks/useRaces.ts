import { useState, useEffect } from "react";
// Normal imports
import { monthNames, weekdayNames } from "@shared/types/date.types";
import { fetchCityWithDepartment } from "@shared/api/colombiaData";
import { fetchLimitedRaces } from "@shared/api/races";
import { PostgrestError } from "@supabase/supabase-js";

// Type imports
import type {
    LocationProps,
    RaceWithProcessedData,
} from "@shared/types/race.types";
import type { DateProps } from "@shared/types/date.types";

function processDate(dateString: string): DateProps {
    const date = new Date(dateString);

    return {
        day: date.getDate(),
        weekday: weekdayNames[date.getDay()],
        month: monthNames[date.getMonth()],
        year: date.getFullYear(),
    };
}

async function processLocation(city_id: string): Promise<LocationProps> {
    const { city, department } = await fetchCityWithDepartment(city_id);

    return {
        city: city.name,
        department: department.name,
    };
}

export const useRaces = () => {
    const [races, setRaces] = useState<RaceWithProcessedData[]>([]);
    const [error, setError] = useState<PostgrestError | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        async function loadRaces() {
            const { data, error } = await fetchLimitedRaces();
            if (!error && data) {
                const RaceWithProcessedData: RaceWithProcessedData[] = data.map(
                    (race) => ({
                        ...race,
                        processedDate: processDate(race?.race_date),
                        location: processLocation(race?.location_city_id),
                    })
                );
                setRaces(RaceWithProcessedData);
            } else {
                setError(error);
            }
            setIsLoading(false);
        }
        loadRaces();
    }, []);

    return { races, error, isLoading };
};
