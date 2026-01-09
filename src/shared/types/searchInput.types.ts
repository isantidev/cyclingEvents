import type {
    LocationProps,
    RaceCategory,
    RaceDifficulty,
} from "@modules/races/race.types";

export interface InitialValuesSearchForm {
    date: Date;
    difficulty: RaceDifficulty | null;
    category: RaceCategory | null;
    location: LocationProps | null;
}
