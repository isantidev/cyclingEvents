import { useEffect, useState } from "react";
import { fetchCitiesByDepartment } from "@shared/api/colombiaData";
import type { City } from "@shared/types/colombiaData.types";
import type { FetchState } from "@shared/types/fetch.types";

// Hook to fetch the cities' data by deparment
export const useColCitiesByDept = (deparmentId: number) => {
    const [state, setState] = useState<FetchState<City[]>>({
        data: null,
        error: null,
        isLoading: true,
    });

    useEffect(() => {
        fetchCitiesByDepartment(deparmentId)
            .then((data) => setState({ data, error: null, isLoading: false }))
            .catch((error) =>
                setState({ data: null, error, isLoading: false })
            );
    }, [deparmentId]);

    return state;
};
