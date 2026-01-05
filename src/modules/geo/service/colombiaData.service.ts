import * as repo from "@modules/geo/api/colombiaData";
import type { City, Department } from "@modules/geo/colombiaData.types";

let departmentsCache = new Map<string, Department[]>();
let citiesCache = new Map<number, City[]>();

export const colombiaDataService = {
    getDeparments: async () => {
        if (departmentsCache.has("all"))
            return {
                success: true,
                data: departmentsCache.get("all") as Department[],
                error: null,
            };

        const response = await repo.fetchDepartments();

        if (!response.success) return response;

        if (response.data) departmentsCache.set("all", response.data);

        return response;
    },

    getCitiesByDepartment: async (department_id: City["department_id"]) => {
        if (citiesCache.has(department_id))
            return {
                success: true,
                data: citiesCache.get(department_id) as City[],
                error: null,
            };

        const response = await repo.fetchCitiesByDepartment(department_id);

        if (!response.success) return response;

        if (response.data) citiesCache.set(department_id, response.data);

        return response;
    },
};
