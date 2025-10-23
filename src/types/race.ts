export type RaceDate = {
    day: number;
    weekday: string;
    month: string;
    year?: number | 2025;
};

export type RaceLocation = {
    city: string;
    abbreviation?: string;
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
