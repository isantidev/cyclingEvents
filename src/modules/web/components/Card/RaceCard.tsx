import type { Race } from "@modules/races/race.types";
import { Link } from "react-router";

const Card = ({ race_data }: { race_data: Race }) => {
    const { weekday, month, day, year } = race_data.processedDate;
    const { city, department } = race_data.location;

    const dateSpan = `${weekday.slice(0, 3)}, ${month.slice(
        0,
        3
    )} ${day}, ${year}`;
    const locationSpan = `${city}${department ? `, ${department}` : ""}.`;
    const raceInfoSpan = `${dateSpan} - ${locationSpan}`;

    return (
        <Link
            id={`race-${race_data.race_id}`}
            to={`/Races/${race_data.title}`}
            className="rounded-xl overflow-hidden pb-4 bg-zinc-50 flex flex-col"
        >
            <figure className="aspect-5/3 overflow-hidden block">
                <img
                    src={race_data.image_url}
                    alt={`race image: ${race_data.title}`}
                    className="size-full object-cover"
                    loading="lazy"
                />
            </figure>
            <div className="px-4 mt-8 mb-4 flex flex-col flex-1">
                <p className="font-medium text-xl">{race_data.title}</p>
                <p className="md:text-lg text-black/60">{raceInfoSpan}</p>
            </div>
            <p className="text-lg text-left mt-auto px-4 text-blue-600 hover:text-blue-800">
                Ver detalles
            </p>
        </Link>
    );
};

export default Card;
