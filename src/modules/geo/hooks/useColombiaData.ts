import { useState, useEffect, useCallback } from "react";
import { colombiaDataService } from "../service/colombiaData.service";
import type { Department } from "../colombiaData.types";

export function useColombiaData() {
    const [departmetns, setDepartments] = useState<Department[]>();
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

    return { departmetns, getCities, isLoading };
}
