import { monthNames, weekdayNames } from "@shared/types/date.types";
import { colombiaDataService } from "@modules/geo/service/colombiaData.service";
import * as repo from "@modules/races/api/races.repo";
import type { BaseRace, ExtendRace } from "../race.types";

async function formatDate(race_date: string) {
    const date = new Date(race_date);

    return {
        day: date.getDate(),
        weekday: weekdayNames[date.getDay()],
        month: monthNames[date.getMonth()],
        year: date.getFullYear(),
    };
}

async function convertLocation(city_id: number, goal_city_id?: number) {
    const startCity = await colombiaDataService.getCity(city_id);
    const startDepartment = await colombiaDataService.getDepartment(
        startCity.data!.department_id
    );

    if (!startCity.success) {
        return { startCity: null, goalCity: null, startDepartment: null };
    }

    if (goal_city_id) {
        const goalCity = await colombiaDataService.getCity(goal_city_id);
        const goalDepartment = await colombiaDataService.getDepartment(
            startCity.data!.department_id
        );
        return {
            startCity: startCity.data,
            goalCity: goalCity.success ? goalCity.data : null,
            goalDepartment: goalDepartment?.success
                ? goalDepartment.data
                : null,
        };
    }

    return {
        startCity: startCity.data,
        goalCity: null,
        startDepartment: startDepartment?.data,
    };
}

const processRaceBasicInfo = async (raceData: ExtendRace | BaseRace) => {
    const date = await formatDate(raceData.race_date);

    const location = await convertLocation(
        raceData.location_city_id,
        "location_goal_city_id" in raceData
            ? raceData.location_goal_city_id
            : undefined
    );

    return {
        date,
        location,
    };
};

export const racesService = {
    getUpcomingRacesSummary: async () => {
        const response = await repo.getRacesSummary();
        if (!response.success) return response;

        const today = new Date();
        const upcomingRaces = response.data.filter(
            (race) => new Date(race.race_date) > today
        );

        const processedData = await Promise.all(
            upcomingRaces.map(async (race) => ({
                ...race,
                processedDate: (await processRaceBasicInfo(race)).date,
                processedLocation: (await processRaceBasicInfo(race)).location,
            }))
        );

        console.log(processedData);
        return { ...response, data: processedData };
    },

    getUpcomingRacesExtend: async () => {
        const response = await repo.getRacesExtend();
        if (!response.success) return response;

        const today = new Date();
        const upcomingRaces = response.data.filter(
            (race) => new Date(race.race_date) > today
        );

        const processedData = await Promise.all(
            upcomingRaces.map(async (race) => ({
                ...race,
                processedDate: (await processRaceBasicInfo(race)).date,
                processedLocation: (await processRaceBasicInfo(race)).location,
            }))
        );

        console.log(processedData);
        return { ...response, data: processedData };
    },

    getRaceInfo: async (race_id: number) => {
        const response = await repo.getRaceById(race_id);

        if (!response.success) return response;
    },
};
