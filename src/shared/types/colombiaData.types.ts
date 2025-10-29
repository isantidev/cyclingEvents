export interface Department {
    id: number;
    name: string;
    description?: string;
    cityCapitalId?: number;
    municipalities?: number;
    surface?: number;
    population?: number;
}

export interface City {
    id: number;
    name: string;
    description?: string;
    surface?: number;
    population?: number;
    postalCode?: string;
    departmentId: number;
    department?: Department;
}
