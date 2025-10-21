// import HeroBanner from "./components/Hero/HeroBanner";
import Button from "./components/Button/Button";

function App() {
    return (
        <main className="max-w-7xl w-full px-4 mx-auto flex flex-col justify-center items-center">
            <h1 className="text-5xl font-extrabold">
                ¡Encuentra tu proximo reto!
            </h1>
            <Button children="text" />
        </main>
    );
}

export default App;
