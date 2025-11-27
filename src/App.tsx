import { BrowserRouter } from "react-router";
import HomePage from "@modules/web/pages/HomePage";
import Navbar from "@modules/web/components/Nav/Navbar";
import { webLinks } from "@shared/config/routes.config";

function App() {
    return (
        <BrowserRouter>
            <header className="sticky w-full top-0 z-900 flex justify-center items-center shadow-md bg-[#f5f7f8]">
                <Navbar links={webLinks} />
            </header>
            <main className="max-w-[1440px] w-full mx-auto px-4 my-4 flex flex-col justify-center items-center">
                <HomePage />
            </main>
        </BrowserRouter>
    );
}

export default App;
