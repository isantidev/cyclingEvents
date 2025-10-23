import { useEffect, useState } from "react";
import HeroBanner from "./components/Hero/HeroBanner";
import Races from "./components/layout/Races";
import type { Race } from "./types/race";
import { raceService } from "./services/raceService";

const SHOWN_RACES_HOME = 6;

function App() {
    const [races, setRaces] = useState<Race[]>([]);
    useEffect(() => {
        raceService.getByLimit(SHOWN_RACES_HOME).then(setRaces);
    }, []);

    return (
        <main className="max-w-7xl w-full mx-auto px-4 my-8 flex flex-col gap-8 lg:gap-16 justify-center items-center">
            <HeroBanner />
            <h1 className="text-5xl font-extrabold">
                ¡Encuentra tu proximo reto!
            </h1>
            <Races races={races} />
        </main>
    );
}

export default App;
