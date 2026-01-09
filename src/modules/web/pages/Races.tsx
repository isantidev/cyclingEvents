import Card from "@modules/web/components/Card/RaceCard";
import { useUpcomingRaces } from "@/modules/races/hooks/useUpcomingRaces";
import Loading from "@shared/components/Loading";
// import ErrorMessage from "@shared/components/Error";
import { SearchForm } from "@modules/web/components/Search/SearchFormSection";
// import Search from "../Search/Search";

const Races = () => {
    const { data, error, isLoading } = useUpcomingRaces();
    if (error) console.error(error);

    if (isLoading) {
        return <Loading />;
    }

    // if (error) {
    //     return <ErrorMessage error={error} />;
    // }

    return (
        <main className="max-w-[1440px] w-full mx-auto px-4 my-4 flex flex-col justify-center items-center">
            <SearchForm />

            <section className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 auto-rows-fr gap-8">
                {data.map((race) => {
                    return <Card key={race.race_id} {...race} />;
                })}
            </section>
        </main>
    );
};

export default Races;
