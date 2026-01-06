import { monthNames, weekdayNames } from "@/shared/types/date.types";
import * as repo from "../api/races.repo";

function processDate(race_date: string) {
    const date = new Date(race_date);

    return {
        day: date.getDate(),
        weekday: weekdayNames[date.getDay()],
        month: monthNames[date.getMonth()],
        year: date.getFullYear(),
    };
}

export const racesService = {
    getUpcomingRaces: async () => {
        const response = await repo.getRacesExtend();
        if (!response.success) return response;

        const today = new Date();
        const processedData = response.data
            .filter((race) => new Date(race.race_date) > today)
            .map((race) => ({
                ...race,
                processedDate: processDate(race.race_date),
            }));

        return { ...response, data: processedData };
    },

    getRaceInfo: async (race_id: string) => {
        const response = await repo.getRaceById(race_id);

        if (!response.success) return response;
    },
};
