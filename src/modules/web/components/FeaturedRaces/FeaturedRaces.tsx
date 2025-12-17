import { useMemo } from "react";
import { useRaces } from "@modules/races/hooks/useRaces";
import Card from "@modules/web/components/Card/RaceCard";
import ErrorMessage from "@shared/components/Error";
import Loading from "@shared/components/Loading";

const FeaturedRaces = () => {
    const { races, error, isLoading } = useRaces();

    // Memoize the race cards to prevent unnecessary re-renders
    const raceCards = useMemo(() => {
        if (races.length === 0) return null;
        return races.map((race) => (
            <Card key={race.race_id} race_data={race} />
        ));
    }, [races]);

    // Loading state
    if (isLoading) {
        return <Loading />;
    }

    // Error state
    if (error) {
        return <ErrorMessage error={error} />;
    }

    // Empty state
    if (races.length === 0) {
        return (
            <section className="grid grid-flow-row md:grid-cols-2 xl:grid-cols-3 justify-center items-center gap-4 md:gap-8 px-4 lg:px-8">
                <div className="col-span-full flex flex-col items-center justify-center py-16 px-4">
                    <p className="text-lg text-gray-600">
                        No hay carreras disponibles en este momento.
                    </p>
                </div>
            </section>
        );
    }

    // Success state - render races
    return (
        <section className="grid grid-flow-row md:grid-cols-2 xl:grid-cols-3 justify-center items-center gap-4 md:gap-8 px-4 lg:px-8">
            {raceCards}
        </section>
    );
};

export default FeaturedRaces;
