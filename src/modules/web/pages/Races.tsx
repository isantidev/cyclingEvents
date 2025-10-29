import Card from "@modules/web/components/Card/RaceCard";
import { useRaces } from "@shared/hooks/useRaces";
import type { RaceWithProcessedData } from "@shared/types/race.types";
// import Search from "../Search/Search";

const Races = () => {
    const { races, error, isLoading } = useRaces();
    if (error) console.error(error);
    
    return (
        <>
            <search className="w-full">
                <input type="date" name="race-date" id="input-race-date" />
                <input type="text" name="race-filter" id="input-race-filter" />

                {/* <Search /> */}
            </search>

            {isLoading && <p>Tus proximos retos están cargando...</p>}
            {error && <p>Ha ocurrido un problema al cargas las carreras...</p>}
            {races && !error && isLoading == false && (
                <section className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 auto-rows-fr gap-8">
                    {races.map((race: RaceWithProcessedData) => {
                        return (
                            <Card
                                key={race.race_id}
                                id={"race-card" + race.race_id}
                                title={race.title}
                                slug={race.slug}
                                image_url={race.image_url}
                                processedDate={race.processedDate}
                                location={race.location}
                            />
                        );
                    })}
                </section>
            )}
        </>
    );
};

export default Races;
