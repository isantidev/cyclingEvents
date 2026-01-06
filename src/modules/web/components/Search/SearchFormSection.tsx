import { useState, useEffect, useId, useRef } from "react";
import { fetchCities, fetchDepartments } from "@/modules/geo/api/colombiaData";
import type { Department, City } from "@/modules/geo/colombiaData.types";

const handleClearFilters = (
    e: React.MouseEvent<HTMLButtonElement>,
    ref: React.RefObject<HTMLFormElement | null>
) => {
    e.preventDefault();

    ref.current?.reset();
};

export const SearchFormComponent = () => {
    const formRef = useRef<HTMLFormElement>(null);
    const raceDateId = useId();
    const raceDifficultyId = useId();
    const raceCategoryIdMtb = useId();
    const raceCategoryIdGravel = useId();
    const raceCategoryIdRoad = useId();
    const raceDepartmentId = useId();
    const raceCityId = useId();

    const [departments, setDepartments] = useState<Department[]>([]);
    const [selectedDepartment, setSelectedDepartment] = useState<number | null>(
        null
    );

    const [cities, setCities] = useState<City[]>([]);

    useEffect(() => {
        fetchDepartments().then((data) => {
            setDepartments(data);
        });
    }, []);

    useEffect(() => {
        if (selectedDepartment === null) {
            setCities([]);
            return;
        }
        fetchCities({ department_id: selectedDepartment }).then((data) => {
            setCities(data);
        });
    }, [selectedDepartment]);

    return (
        <aside>
            <header>
                <h3>Filtros</h3>
                <button
                    type="button"
                    onClick={(e) => handleClearFilters(e, formRef)}
                    className="text-red-700 px-2 py-1 rounded"
                >
                    Limpiar filtros
                </button>
            </header>
            <form action="GET" ref={formRef}>
                {/* Date */}
                <div className="flex flex-col gap-2">
                    <label htmlFor={raceDateId}>Fecha</label>
                    <input type="date" name="race-date" id={raceDateId} />
                </div>

                <div className="flex flex-col gap-2">
                    <label htmlFor={raceDifficultyId}>Dificultad</label>
                    <select name="race-difficulty" id={raceDifficultyId}>
                        <option value="easy">Facil</option>
                        <option value="medium">Intermedio</option>
                        <option value="hard">Avanzado</option>
                    </select>
                </div>

                {/* Category */}
                <div className="flex flex-col gap-2">
                    <h4>Categoría</h4>
                    <label htmlFor={raceCategoryIdMtb}>MTB</label>
                    <input
                        type="checkbox"
                        name="race-category-mtb"
                        id={raceCategoryIdMtb}
                    />
                    <label htmlFor={raceCategoryIdGravel}>Gravel</label>
                    <input
                        type="checkbox"
                        name="race-category-gravel"
                        id={raceCategoryIdGravel}
                    />
                    <label htmlFor={raceCategoryIdRoad}>Road</label>
                    <input
                        type="checkbox"
                        name="race-category-road"
                        id={raceCategoryIdRoad}
                    />
                </div>

                {/* Department */}
                <div className="flex flex-col gap-2">
                    <label htmlFor={raceDepartmentId}>Departamento</label>
                    <select
                        name="race-department"
                        id={raceDepartmentId}
                        onChange={(e) =>
                            setSelectedDepartment(Number(e.target.value))
                        }
                    >
                        <option value="" selected>
                            Elija un departamento
                        </option>
                        {departments.map((department) => (
                            <option key={department.id} value={department.id}>
                                {department.department_name}
                            </option>
                        ))}
                    </select>
                </div>

                {/* City */}
                <div className="flex flex-col gap-2">
                    <label htmlFor={raceCityId}>Ciudad</label>
                    <select
                        name="race-city"
                        id={raceCityId}
                        disabled={selectedDepartment === null}
                    >
                        <option value="" selected>
                            Elija una ciudad
                        </option>
                        {cities.map((city) => (
                            <option key={city.id} value={city.id}>
                                {city.city_name}
                            </option>
                        ))}
                    </select>
                </div>
            </form>
        </aside>
    );
};
