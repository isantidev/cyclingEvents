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
            className="relative rounded-xl overflow-hidden min-h-96 bg-zinc-50"
        >
            <a href={slug}>
                <img
                    src={imageUrl}
                    alt=""
                    className="aspect-3/2 object-cover max-h-60"
                />
            </a>
            <div className="px-4 mt-7 mb-2 flex flex-col">
                <a href={slug} className="font-medium text-xl">
                    {title}
                </a>
                <p className="md:text-lg text-black/60 pb-2 md:pb-4">
                    {raceInfoSpan}
                </p>
                <a
                    href={slug}
                    className="text-lg mt-2 text-blue-400 hover:text-blue-600"
                >
                    Ver detalles
                </a>
            </div>
        </article>
    );
};

export default Card;
