import * as repo from "@/modules/geo/api/colombiaData.repo";
import type { City, Department } from "@modules/geo/colombiaData.types";

const departmentsCache = new Map<string, Department[] | Department>();
const citiesCache = new Map<number, City[]>();
const cityByIdCache = new Map<number, City>();

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

    getDepartment: async (department_id: Department["id"]) => {
        if (departmentsCache.has(String(department_id)))
            return {
                success: true,
                data: departmentsCache.get(String(department_id)) as Department,
                error: null,
            };

        const response = await repo.fetchDepartmentById(department_id);

        if (!response.success) return response;

        if (response.data)
            departmentsCache.set(String(department_id), response.data);
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

    getCity: async (city_id: City["id"]) => {
        if (cityByIdCache.has(city_id))
            return {
                success: true,
                data: cityByIdCache.get(city_id) as City,
                error: null,
            };

        for (const cities of citiesCache.values()) {
            const city = cities.find((c) => c.id === city_id);

            if (city)
                return {
                    success: true,
                    data: city,
                    error: null,
                };
        }

        const response = await repo.fetchCity(city_id);

        if (!response.success) return response;

        if (response.data) cityByIdCache.set(city_id, response.data);
        return response;
    },
};
