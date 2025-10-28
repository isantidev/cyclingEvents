import RaceCard from "@modules/web/components/Card/RaceCard";
import type { Race } from "@shared/types/race.types";
// import Search from "../Search/Search";

type RacesProps = {
    races: Race[];
};

const Races = ({ races }: RacesProps) => {
    return (
        <>
            <search className="w-full">
                <input type="date" name="race-date" id="input-race-date" />
                <input type="text" name="race-filter" id="input-race-filter" />

                {/* <Search /> */}
            </search>
            <section className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 auto-rows-fr gap-8">
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
        </>
    );
};

export default Races;
