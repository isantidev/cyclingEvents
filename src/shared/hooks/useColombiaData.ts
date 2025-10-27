import { useEffect, useState } from "react";

export function useColombiaCitiesData({
    departmentId,
}: {
    departmentId: number;
}) {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        if (!departmentId) return;

        fetch(
            `https://api-colombia.com/api/v1/Department/${departmentId}/cities`
        )
            .then((response) => response.json())
            .then((cityInfo) => {
                setData(cityInfo);
                setIsLoading(false);
            })
            .catch((error) => {
                setError(error);
                setIsLoading(false);
            });
    }, [departmentId]);

    return { cityData: data, cityError: error, cityStatus: isLoading };
}

export function useColombiaDepartmentsData() {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        fetch(`https://api-colombia.com/api/v1/Department`)
            .then((response) => response.json())
            .then((cityInfo) => {
                setData(cityInfo);
                setIsLoading(false);
            })
            .catch((error) => {
                setError(error);
                setIsLoading(false);
            });
    }, []);

    return { deptData: data, deptError: error, deptStatus: isLoading };
}
