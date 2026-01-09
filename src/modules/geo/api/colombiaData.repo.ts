import supabase from "@core/api/supabase-client";
import type { AppResult } from "@core/types/api";
import type { City, Department } from "@modules/geo/colombiaData.types";

export async function fetchDepartments(): Promise<AppResult<Department[]>> {
    try {
        const { data, error } = await supabase
            .from("Deparments")
            .select("id, department_name");

        if (error) return { success: false, data: null, error: error.message };

        const mappedData: Department[] = data.map((item) => ({
            id: item.id,
            department_name: item.department_name,
        }));

        return { success: true, data: mappedData, error: null };
    } catch (error) {
        return {
            success: false,
            data: null,
            error: `Unexpected network failure - Details ${JSON.stringify(
                error
            )}`,
        };
    }
}

export async function fetchCitiesByDepartment(
    department_id: City["department_id"]
): Promise<AppResult<City[]>> {
    try {
        const { data, error } = await supabase
            .from("Cities")
            .select("id, city_name, department_id")
            .eq("department_id", department_id);

        if (error) return { success: false, data: null, error: error.message };

        const mappedData: City[] = data.map((item) => ({
            id: item.id,
            city_name: item.city_name,
            department_id: item.department_id,
        }));
        return { success: true, data: mappedData, error: null };
    } catch (error) {
        return {
            success: false,
            data: null,
            error: `Unexpected network failure - Details ${JSON.stringify(
                error
            )}`,
        };
    }
}

export async function fetchDepartmentById(
    department_id: Department["id"]
): Promise<AppResult<Department>> {
    try {
        const { data, error } = await supabase
            .from("Departments")
            .select("id,department_name")
            .eq("id", department_id)
            .single();

        if (error) return { success: false, data: null, error: error.message };

        return { success: true, data: data, error: null };
    } catch (error) {
        return {
            success: false,
            data: null,
            error: `Unexpected network failure - Details ${JSON.stringify(
                error
            )}`,
        };
    }
}

export async function fetchCity(city_id: City["id"]): Promise<AppResult<City>> {
    try {
        const { data, error } = await supabase
            .from("Cities")
            .select("id, city_name, department_id")
            .eq("id", city_id)
            .single();

        if (error) return { success: false, data: null, error: error.message };

        return { success: true, data: data, error: null };
    } catch (error) {
        return {
            success: false,
            data: null,
            error: `Unexpected network failure - Details ${JSON.stringify(
                error
            )}`,
        };
    }
}
