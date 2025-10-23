import HeroBanner from "./components/Hero/HeroBanner";
import Races from "./components/layout/Races";

const races = [
    {
        id: 1,
        title: "Vuelta al Valle del Cauca",
        slug: "#",
        imageUrl:
            "https://spirobicycles.com/cdn/shop/files/bicicleta_mtb_gaia_baudo_cuest_11v_diagonal-completa.jpg?v=1753054954&width=753",
        date: {
            day: 27,
            weekday: "Domingo",
            month: "Octubre",
        },
        location: {
            city: "Cali",
            abbreviation: "CLO",
        },
    },
    {
        id: 2,
        title: "Clásica de Ruta La Sabana",
        slug: "#",
        imageUrl:
            "https://spirobicycles.com/cdn/shop/files/bicicleta_mtb_gaia_baudo_cuest_11v_diagonal-completa.jpg?v=1753054954&width=753",
        date: {
            weekday: "Sábado",
            month: "Noviembre",
            day: 2,
        },
        location: {
            city: "Zipaquirá",
        },
    },
    {
        id: 3,
        title: "Desafío MTB Chicamocha",
        slug: "#",
        imageUrl:
            "https://spirobicycles.com/cdn/shop/files/bicicleta_mtb_gaia_baudo_cuest_11v_diagonal-completa.jpg?v=1753054954&width=753",
        date: {
            weekday: "Viernes",
            month: "Diciembre",
            day: 6,
        },
        location: {
            city: "San Gil",
            abbreviation: "SGL",
        },
    },
];

function App() {
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
