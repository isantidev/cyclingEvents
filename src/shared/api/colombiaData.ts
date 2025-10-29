import type { Department, City } from "@shared/types/colombiaData.types";

const API_BASE_URL = "https://api-colombia.com/api/v1";

// Fetch all deparments
export async function fetchDepartments(): Promise<Department[]> {
    const response = await fetch(`${API_BASE_URL}/Department`);
    if (!response.ok) throw new Error("Failed to fetch departments");
    return response.json();
}

export async function fetchCitiesByDepartment(
    departmentId: number
): Promise<City[]> {
    const response = await fetch(
        `${API_BASE_URL}/Department/${departmentId}/cities`
    );
    if (!response.ok) throw new Error("Failed to fetch cities");
    return response.json();
}
