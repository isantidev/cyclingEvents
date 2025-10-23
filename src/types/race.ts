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
    title: string;
    href: string;
    image: string;
    date: RaceDate;
    location: RaceLocation;
};
