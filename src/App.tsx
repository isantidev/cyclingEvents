import HeroBanner from "@modules/web/components/Hero/HeroBanner";

function App() {
    return (
        <main className="max-w-7xl w-full mx-auto px-4 my-8 flex flex-col gap-8 lg:gap-16 justify-center items-center">
            <HeroBanner />
            <h1 className="text-5xl font-extrabold">
                ¡Encuentra tu proximo reto!
            </h1>
        </main>
    );
}

export default App;
