import { useEffect, useState } from "react";

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
