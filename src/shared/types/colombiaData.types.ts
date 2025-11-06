export interface Department {
    id: number;
    department_name: string;
}

export interface City {
    id: number;
    city_name: string;
    department_id: number;
}

export interface Filters {
    department_id?: number;
    department_name?: string;
    city_id?: number;
    city_name?: string;
}

export interface CityWithDepartment extends City {
    Departments: Department;
}

export interface DepartmentWithCities extends Department {
    Cities: City[];
}
