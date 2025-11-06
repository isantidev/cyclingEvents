import { useEffect, useState } from "react";
// Normal imports
import { fetchCityWithDepartment } from "@shared/api/colombiaData";
// import { fetchCityByName } from "@shared/api/colombiaData";
// Type imports
import type { LocationProps } from "@shared/types/race.types";
// import type { City } from "@shared/types/colombiaData.types";
import type { FetchState } from "@shared/types/fetch.types";

export const useColCityAndDept = (city_id: string) => {
    const [state, setState] = useState<FetchState<LocationProps>>({
        data: null,
        error: null,
        isLoading: true,
    });

    useEffect(() => {
        if (!city_id) {
            setState({ data: null, error: null, isLoading: false });
            return;
        }
        let cancelled = false;

        setState((prev) => ({ ...prev, isLoading: true }));

        fetchCityWithDepartment(city_id)
            .then((data) => {
                if (!cancelled) {
                    setState({
                        data: {
                            city: data.city.name,
                            department: data.department.name,
                        },
                        error: null,
                        isLoading: false,
                    });
                }
            })
            .catch((error) => {
                if (!cancelled) {
                    setState({ data: null, error, isLoading: false });
                }
            });

        return () => {
            cancelled = true;
        };
    }, [city_id]);

    return state;
};

/*
const useColCity = (cityName: string) => {
    const [state, setState] = useState<FetchState<City>>({
        data: null,
        error: null,
        isLoading: true,
    });

    useEffect(() => {
        fetchCityByName(cityName)
            .then((data) => setState({ data, error: null, isLoading: false }))
            .catch((error) =>
                setState({ data: null, error, isLoading: false })
            );
    }, [cityName]);

    return state;
};
*/
