import type { DateProps } from "@shared/types/date.types";
import type { City, Department } from "@modules/geo/colombiaData.types";

export type RaceCategory = "MTB" | "Gravel" | "Road";
export type RaceDifficulty = "easy" | "mid" | "advanced";

export interface BaseRace {
    race_id: string;
    title: string;
    slug: string;
    description: string;
    race_category: RaceCategory[];
    race_difficulty: RaceDifficulty[];
    race_date: string;
    image_url: string;
    location_city_id: number;
}

export interface ExtendRace extends BaseRace {
    organizer_id: string;
    distance_km: number;
    elevation_gain_m: number;
    max_participants: number;
    registration_closes_at?: string;
    created_at: string;
    location_goal_city_id?: number;
}

export interface LocationPropsInput {
    location_goal_city_id: number;
    location_city_id: number;
}

export type LocationProps = {
    startCity: City;
    goalCity?: City | null;
    startDepartment: Department;
    goalDepartment?: Department | null;
};

export interface BaseRaceProcessedData extends BaseRace {
    processedDate: DateProps;
    processedLocation: LocationProps;
}

export interface ExtendRaceProcessedData extends ExtendRace {
    processedDate: DateProps;
    processedLocation: LocationProps;
}

export interface UseUpcomingRacesOptions {
    variant?: "extend" | "summary";
    enabled?: boolean;
}
