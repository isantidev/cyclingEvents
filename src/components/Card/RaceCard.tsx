import type { RaceCardProps } from "../../types/race";

const Card = ({ id, title, slug, imageUrl, date, location }: RaceCardProps) => {
    const { weekday, month, day, year } = date;
    const { city, abbreviation } = location;

    const dateSpan = `${weekday.slice(0, 3)}, ${month.slice(
        0,
        3
    )} ${day}, ${year}`;
    const locationSpan = `${city}${abbreviation ? `, ${abbreviation}` : ""}.`;
    const raceInfoSpan = `${dateSpan} - ${locationSpan}`;

    return (
        <article
            id={`race-${id}`}
            className="rounded-xl overflow-hidden pb-4 bg-zinc-50 flex flex-col"
        >
            <a href={slug} className="aspect-3/2 overflow-hidden block">
                <img
                    src={imageUrl}
                    alt={`race image: ${title}`}
                    className="size-full object-cover"
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
