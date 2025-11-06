import { useRaces } from "@shared/hooks/useRaces";
import Card from "@modules/web/components/Card/RaceCard";

const FeaturedRaces = () => {
    const { races, error, isLoading } = useRaces();

    return (
        <section className="grid grid-flow-row md:grid-cols-2 xl:grid-cols-3 justify-center items-center gap-4 md:gap-8 px-4 lg:px-8">
            {isLoading && <p>Tus próximos retos están cargando</p>}
            {!isLoading && error && (
                <p>Ha ocurrido un error al cargar las próximas carreras</p>
            )}
            {races.length > 0 &&
                !isLoading &&
                !error &&
                races.map((race) => {
                    return (
                        <Card
                            key={race.race_id}
                            id={`race-card-${race.race_id}`}
                            title={race.title}
                            slug={race.slug}
                            image_url={race.image_url}
                            processedDate={race.processedDate}
                            location={race.location}
                        />
                    );
                })}
        </section>
    );
};

export default FeaturedRaces;
