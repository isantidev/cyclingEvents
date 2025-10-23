import RaceCard from "../Card/RaceCard";
import type { RaceCardProps } from "../../types/race";

type RacesProps = {
    races: RaceCardProps[];
};
const Races = ({ races }: RacesProps) => {
    return (
        <section>
            <search></search>
            {races.map((race) => {
                return (
                    <RaceCard
                        key={`race-card-${race.id}`}
                        id={race.id}
                        title={race.title}
                        slug={`/races/${race.slug}`}
                        imageUrl={race.imageUrl}
                        date={race.date}
                        location={race.location}
                    />
                );
            })}
        </section>
    );
};

export default Races;
