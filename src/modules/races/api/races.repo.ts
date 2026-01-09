import supabase from "@core/api/supabase-client";
import type { AppResult } from "@core/types/api";
import type { BaseRace, ExtendRace } from "../race.types";

export async function getRacesSummary(): Promise<AppResult<BaseRace[]>> {
    try {
        const { data, error } = await supabase.from("Races").select(`
                race_id, 
                title, 
                slug, 
                description, 
                race_category, 
                race_difficulty, 
                race_date, 
                image_url, 
                location_city_id
            `);

        if (error) return { success: false, data: null, error: error.message };

        const mapped = data.map((r) => ({
            race_id: r.race_id,
            title: r.title,
            slug: r.slug,
            description: r.description,
            race_category: r.race_category,
            race_difficulty: r.race_difficulty,
            race_date: r.race_date,
            image_url: r.image_url,
            location_city_id: r.location_city_id,
        }));

        return { success: true, data: mapped, error: null };
    } catch (error) {
        return {
            success: false,
            data: null,
            error: `Unexpected network failure - ${JSON.stringify(error)}`,
        };
    }
}

export async function getRacesExtend(): Promise<AppResult<ExtendRace[]>> {
    try {
        const { data, error } = await supabase.from("Races").select("*");

        if (error) return { success: false, data: null, error: error.message };

        const mapped = data.map((r) => ({
            race_id: r.race_id,
            title: r.title,
            slug: r.slug,
            description: r.description,
            race_category: r.race_category,
            race_difficulty: r.race_difficulty,
            distance_km: r.distance_km,
            elevation_gain_m: r.elevation_gain_m,
            max_participants: r.max_participants,
            registration_closes_at: r.registration_closes_at,
            race_date: r.race_date,
            image_url: r.image_url,
            location_city_id: r.location_city_id,
            location_goal_city: r.location_goal_city,
            organizer_id: r.organizer_id,
            created_at: r.created_at,
        }));

        return { success: true, data: mapped, error: null };
    } catch (error) {
        return {
            success: false,
            data: null,
            error: `Unexpected network failure - ${JSON.stringify(error)}`,
        };
    }
}

export async function getRaceById(
    race_id: number
): Promise<AppResult<BaseRace[]>> {
    try {
        const { data, error } = await supabase
            .from("Races")
            .select(
                `
                race_id, 
                title, 
                slug, 
                description, 
                race_category, 
                race_difficulty, 
                distance_km, 
                elevation_gain_m, 
                max_participants, 
                registration_closes_at, 
                race_date, 
                image_url, 
                location_city_id, 
                location_goal_city_id,
                organizer_id,
                created_at
            `
            )
            .eq("race_id", race_id);

        if (error) return { success: false, data: null, error: error.message };

        const mapped = data.map((r) => ({
            race_id: r.race_id,
            title: r.title,
            slug: r.slug,
            description: r.description,
            race_category: r.race_category,
            race_difficulty: r.race_difficulty,
            distance_km: r.distance_km,
            elevation_gain_m: r.elevation_gain_m,
            max_participants: r.max_participants,
            registration_closes_at: r.registration_closes_at,
            race_date: r.race_date,
            image_url: r.image_url,
            location_city_id: r.location_city_id,
            location_goal_city_id: r.location_goal_city_id,
            organizer_id: r.organizer_id,
            created_at: r.created_at,
        }));

        return { success: true, data: mapped, error: null };
    } catch (error) {
        return {
            success: false,
            data: null,
            error: `Unexpected network failure - ${JSON.stringify(error)}`,
        };
    }
}
