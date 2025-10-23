type CardProps = {
    title: string;
    href: string;
    image: string;
    date: {
        day: number;
        weekday: string;
        month: string;
        year: number;
    };
    location: {
        city: string;
        abbreviation?: string;
    };
};

const Card = ({ title, href, image, date, location }: CardProps) => {
    const { weekday, month, day, year } = date;
    const { city, abbreviation } = location;

    const dateSpan = `${weekday.slice(0, 3)}, 
        ${month.slice(0, 3)} 
        ${day}, 
        ${year}`;
    const locationSpan = `
        ${city}${abbreviation ? ", " + abbreviation : ""}.`;
    const raceInfoSpan = `${dateSpan} - ${locationSpan}`;

    return (
        <article className="relative rounded-xl overflow-hidden min-h-96 bg-zinc-50">
            <a href={href}>
                <img
                    src={image}
                    alt=""
                    className="aspect-3/2 object-cover max-h-60"
                />
            </a>
            <div className="px-4 mt-7 mb-2 flex flex-col">
                <a href={href} className="font-medium text-xl">
                    {title}
                </a>
                <p className="md:text-lg text-black/60 pb-2 md:pb-4">
                    {raceInfoSpan}
                </p>
                <a
                    href={href}
                    className="text-lg mt-2 text-blue-400 hover:text-blue-600"
                >
                    Ver detalles
                </a>
            </div>
        </article>
    );
};

export default Card;
