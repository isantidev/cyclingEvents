import type { DateProps } from "../../shared/types/date.types";

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
    location_goal_city?: number;
}

export interface Race
    extends Pick<BaseRace, "race_id" | "title" | "slug" | "image_url"> {
    processedDate: DateProps;
    location: LocationProps;
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

export interface RaceWithProcessedData extends BaseRace {
    processedDate: DateProps;
    location: LocationProps;
}
