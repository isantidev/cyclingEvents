import { useState, useEffect, useCallback } from "react";
import { colombiaDataService } from "../service/colombiaData.service";
import type { City, Department } from "../colombiaData.types";

export function useColombiaData() {
    const [departments, setDepartments] = useState<Department[]>();
    const [isLoading, setIsLoading] = useState<boolean>(false);

    useEffect(() => {
        const load = async () => {
            setIsLoading(true);
            const res = await colombiaDataService.getDeparments();

            if (res.success) setDepartments(res.data);
            setIsLoading(false);
        };

        load();
    }, []);

    const getCities = useCallback(async (id: Department["id"]) => {
        setIsLoading(true);
        const res = await colombiaDataService.getCitiesByDepartment(id);
        setIsLoading(false);
        return res.success ? res.data : [];
    }, []);

    const getCity = useCallback(async (city_id: City["id"]) => {
        setIsLoading(true);
        const res = await colombiaDataService.getCity(city_id);
        setIsLoading(false);
        return res.success ? res.data : [];
    }, []);

    return { departments, getCities, getCity, isLoading };
}
