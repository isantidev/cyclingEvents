import { useEffect, useState } from "react";
import type { Department } from "@shared/types/colombiaData.types";

const API_BASE_URL = "https://api-colombia.com/api/v1";

// Fetch all deparments
export async function fetchDepartments(): Promise<Department[]> {
    const response = await fetch(`${API_BASE_URL}/Department`);
    if (!response.ok) throw new Error("Failed to fetch departments");
    return response.json();
}

export function useColombiaCitiesData(department_id: number) {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        if (!department_id) return;

        fetch(`${API_BASE_URL}/Department/${department_id}/cities`)
            .then((response) => response.json())
            .then((cityInfo) => {
                setData(cityInfo);
                setIsLoading(false);
            })
            .catch((error) => {
                setError(error);
                setIsLoading(false);
            });
    }, [department_id]);

    return { citiesData: data, citiesError: error, citiesStatus: isLoading };
}

export function useColombiaCityData(city_id: number) {
    const [cityData, setCityData] = useState([]);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch(`https://api-colombia.com/api/v1/City/${city_id}`)
            .then((response) => response.json())
            .then((cityData) => {
                setCityData(cityData);
                setIsLoading(false);
            })
            .catch((error) => {
                setError(error);
                setIsLoading(false);
            });
    }, [city_id]);

    return {
        cityData,
        cityError: error,
        cityIsLoading: isLoading,
    };
}
