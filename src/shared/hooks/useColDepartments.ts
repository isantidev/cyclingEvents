import { useEffect, useState } from "react";
import { fetchDepartments } from "@shared/api/colombiaData";
import type { Department } from "@shared/types/colombiaData.types";
import type { FetchState } from "@shared/types/fetch.types";

// Hook to fetch the info of all the departments
export const useColombiaDepartments = () => {
    const [state, setState] = useState<FetchState<Department[]>>({
        data: null,
        error: null,
        isLoading: true,
    });

    useEffect(() => {
        fetchDepartments()
            .then((data) => setState({ data, error: null, isLoading: false }))
            .catch((error) =>
                setState({ data: null, error, isLoading: false })
            );
    }, []);

    return state;
};
