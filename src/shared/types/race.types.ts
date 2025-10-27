type weekday =
    | "Lunes"
    | "Martes "
    | "Miercoles"
    | "Jueves"
    | "Viernes"
    | "Sabado "
    | "Domingo";

type month =
    | "Enero"
    | "Febrero"
    | "Marzo"
    | "Abril"
    | "Mayo"
    | "Junio"
    | "Julio"
    | "Agosto"
    | "Septiembre"
    | "Octubre"
    | "Noviembre"
    | "Diciembre";

export type RaceDate = {
    day: number;
    weekday: weekday;
    month: month;
    year?: number | 2025;
};

export type RaceLocation = {
    city: string;
    department?: string;
};

// components/RaceCard.tsx
export type RaceCardProps = {
    id: number;
    title: string;
    slug: string; // Para redireccionar
    imageUrl: string;
    date: RaceDate;
    location: RaceLocation;
};

export type Race = {
    id: number;
    title: string;
    slug: string; // Para redireccionar
    imageUrl: string;
    date: RaceDate;
    location: RaceLocation;
};
