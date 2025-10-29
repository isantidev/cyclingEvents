import type { DateProps } from "./date.types";

export type RaceCategory = "MTB" | "Gravel" | "Road";
export type RaceDifficulty = "easy" | "mid" | "advanced";

export type Race = {
    id: string;
    title: string;
    slug: string;
    image_url: string;
    processedDate: DateProps;
    location: LocationProps;
};

export interface RaceProps {
    race_id: string;
    organizer_id: string;
    title: string;
    slug: string;
    description: string;
    race_category: RaceCategory[];
    race_difficulty: RaceDifficulty[];
    distance_km: number;
    elevation_gain_m: number;
    max_participants: number;
    registration_closes_at?: string;
    race_date: string;
    image_url: string;
    created_at: string;
    location_city_id: number;
    location_goal_city?: number;
}

export interface RaceFilters {
    dateFrom?: string;
    dateTo?: string;
    department?: string;
    city?: string;
    category?: RaceCategory;
    difficulty?: RaceDifficulty;
    keyword?: string;
}

export type LocationProps = {
    city: string;
    department: string;
};

export interface RaceWithProcessedData extends RaceProps {
    processedDate: DateProps;
    location: LocationProps;
}
