import type { RaceCategory, RaceDifficulty } from "@/modules/races/race.types";
import type { InitialValuesSearchForm } from "@shared/types/searchInput.types";
import { useCallback, useMemo } from "react";
import { useSearchParams } from "react-router";

export function useRaceFilters() {
    const [searchParams, setSearchParams] = useSearchParams();

    const filters: InitialValuesSearchForm = useMemo(
        () => ({
            date: searchParams.get("date")
                ? new Date(searchParams.get("date")!)
                : new Date(),
            difficulty:
                (searchParams.get("difficulty") as RaceDifficulty) || null,
            category: (searchParams.get("category") as RaceCategory) || null,
            location: searchParams.get("location")
                ? JSON.parse(searchParams.get("location")!)
                : null,
        }),
        [searchParams]
    );

    const updateFilters = useCallback(
        (updates: Partial<InitialValuesSearchForm>) => {
            const newParams = new URLSearchParams(searchParams);

            Object.entries(updates).forEach(([key, value]) => {
                if (value === null) newParams.delete(key);
                else if (value instanceof Date)
                    newParams.set(key, value.toISOString());
                else if (typeof value === "object")
                    newParams.set(key, JSON.stringify(value));
                else newParams.set(key, value.toString());
            });

            setSearchParams(newParams);
        },
        [searchParams, setSearchParams]
    );

    const resetFilters = useCallback(() => {
        setSearchParams({});
    }, [setSearchParams]);

    return { filters, updateFilters, resetFilters };
}
