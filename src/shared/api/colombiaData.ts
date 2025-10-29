import type { Department, City } from "@shared/types/colombiaData.types";

const API_BASE_URL = "https://api-colombia.com/api/v1";

// Fetch all deparments
export async function fetchDepartments(): Promise<Department[]> {
    const response = await fetch(`${API_BASE_URL}/Department`);
    if (!response.ok) throw new Error("Failed to fetch departments");
    return response.json();
}

// Fetch cities by deparment
export async function fetchCitiesByDepartment(
    departmentId: number
): Promise<City[]> {
    const response = await fetch(
        `${API_BASE_URL}/Department/${departmentId}/cities`
    );
    if (!response.ok) throw new Error("Failed to fetch cities");
    return response.json();
}

// Fetch city by id
export async function fetchCityById(cityId: string): Promise<City> {
    const response = await fetch(`${API_BASE_URL}/City/${cityId}`);
    if (!response.ok) throw new Error("Failed to fetch city");
    return response.json();
}

// Fetch city by name
export async function fetchCityByName(cityName: string): Promise<City> {
    const response = await fetch(`${API_BASE_URL}/City/name/${cityName}`);
    if (!response.ok) throw new Error("Failed to fetch city");
    return response.json();
}

// Fetch cities by a keyword
export async function searchCities(keyword: string): Promise<City[]> {
    if (!keyword.trim()) return [];
    const response = await fetch(
        `${API_BASE_URL}/City/search/${encodeURIComponent(keyword)}`
    );
    if (!response.ok) throw new Error("Failed to search cities");
    return response.json();
}

// Fetch city's and deparment's name
export async function fetchCityWithDepartment(city_id: string): Promise<{
    city: City;
    department: Department;
}> {
    const city = await fetchCityById(city_id);
    const response = await fetch(
        `${API_BASE_URL}/Department/${city.departmentId}`
    );
    if (!response.ok) throw new Error("Failed to fetch department");
    const department = await response.json();

    return { city, department };
}
