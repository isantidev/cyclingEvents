import supabase from "./supabase-client";
import type { RaceFilters } from "@shared/types/race.types";

export async function fetchRaces(filters?: RaceFilters) {
    let query = supabase
        .from("Races")
        .select("*")
        .order("race_date", { ascending: true });

    if (filters?.category) {
        query = query.contains("race_category", filters.category);
    }

    return await query;
}

export async function fetchLimitedRaces() {
    const query = supabase.from("Races").select("*").range(0, 6);

    return await query;
}
