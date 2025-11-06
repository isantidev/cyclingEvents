import supabase from "./supabase-client";
import type {
    Department,
    City,
    Filters,
    CityWithDepartment,
    DepartmentWithCities,
} from "@shared/types/colombiaData.types";

// Fetch the departments or in case of filter fetch one departmetn
export async function fetchDepartments(
    filters?: Filters
): Promise<Department[]> {
    let query = supabase.from("Departments").select("*");

    if (filters?.department_id) {
        query = query.eq("id", filters.department_id);
    }

    if (filters?.department_name) {
        query = query.eq("department_name", filters.department_name);
    }

    const { data, error } = await query;

    if (error) {
        throw new Error(`Failed to fetch departments: ${error.message}`);
    }

    return data || [];
}

// Fetch all the cities or filter them
export async function fetchCities(filters?: Filters): Promise<City[]> {
    let query = supabase.from("Cities").select("*");

    if (filters?.department_id) {
        query = query.eq("department_id", filters.department_id);
    }

    if (filters?.city_id) {
        query = query.eq("id", filters.city_id);
    }

    if (filters?.city_name) {
        query = query.eq("name", filters.city_name); // Note: using 'name' based on your type
    }

    const { data, error } = await query;

    if (error) {
        throw new Error(`Failed to fetch cities: ${error.message}`);
    }

    return data || [];
}

// Fetch cities with their department info using join
export async function fetchCitiesWithDepartments(
    filters?: Filters
): Promise<CityWithDepartment[]> {
    let query = supabase.from("Cities").select(`
            *,
            Departments (
                id,
                department_name
            )
        `);

    if (filters?.department_id) {
        query = query.eq("department_id", filters.department_id);
    }

    if (filters?.city_id) {
        query = query.eq("id", filters.city_id);
    }

    if (filters?.city_name) {
        query = query.eq("name", filters.city_name);
    }

    const { data, error } = await query;

    if (error) {
        throw new Error(
            `Failed to fetch cities with departments: ${error.message}`
        );
    }

    return data || [];
}

// Optimized: fetch single city with department in one query
export async function fetchCityAndDepartment(
    city_id: number
): Promise<CityWithDepartment> {
    const { data, error } = await supabase
        .from("Cities")
        .select(
            `
            *,
            Departments (*)
        `
        )
        .eq("id", city_id)
        .single();

    if (error) {
        throw new Error(
            `Failed to fetch city and department: ${error.message}`
        );
    }

    if (!data) {
        throw new Error(`City with id ${city_id} not found`);
    }

    return data as CityWithDepartment;
}

// Fetch departments with all their cities
export async function fetchDepartmentsWithCities(
    filters?: Filters
): Promise<DepartmentWithCities[]> {
    let query = supabase.from("Departments").select(`
            *,
            Cities (*)
        `);

    if (filters?.department_id) {
        query = query.eq("id", filters.department_id);
    }

    if (filters?.department_name) {
        query = query.eq("department_name", filters.department_name);
    }

    const { data, error } = await query;

    if (error) {
        throw new Error(
            `Failed to fetch departments with cities: ${error.message}`
        );
    }

    return data || [];
}
