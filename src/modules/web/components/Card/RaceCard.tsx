import type { RaceCardProps } from "@shared/types/race.types";

const Card = ({
    id,
    title,
    slug,
    image_url,
    processedDate,
    location,
}: Race) => {
    const { weekday, month, day, year } = processedDate;

    const { city, department } = location;

    const dateSpan = `${weekday.slice(0, 3)}, ${month.slice(
        0,
        3
    )} ${day}, ${year}`;
    const locationSpan = `${city}${department ? `, ${department}` : ""}.`;
    const raceInfoSpan = `${dateSpan} - ${locationSpan}`;

    return (
        <article
            id={`race-${id}`}
            className="rounded-xl overflow-hidden pb-4 bg-zinc-50 flex flex-col"
        >
            <a href={slug} className="aspect-3/2 overflow-hidden block">
                <img
                    src={image_url}
                    alt={`race image: ${title}`}
                    className="size-full object-cover"
                    loading="lazy"
                />
            </a>
            <div className="px-4 mt-8 mb-4 flex flex-col flex-1">
                <a href={slug} className="font-medium text-xl">
                    {title}
                </a>
                <p className="md:text-lg text-black/60">{raceInfoSpan}</p>
            </div>
            <a
                href={slug}
                className="text-lg mt-auto px-4 text-blue-600 hover:text-blue-800"
            >
                Ver detalles
            </a>
        </article>
    );
};

export default Card;
