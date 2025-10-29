import HeroBanner from "@modules/web/components/Hero/HeroBanner";
import FeaturedRaces from "@modules/web/components/FeaturedRaces/FeaturedRaces";

const HomePage = () => {
    return (
        <div className="w-full flex flex-col gap-8 lg:gap-16">
            <HeroBanner />
            <h1 className="text-5xl font-extrabold">
                ¡Encuentra tu proximo reto!
            </h1>
            <FeaturedRaces />
        </div>
    );
};

export default HomePage;
