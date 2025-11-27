import { BrowserRouter, Routes, Route } from "react-router";
import { webLinks } from "@shared/config/routes.config";
import Navbar from "@modules/web/components/Nav/Navbar";
import HomePage from "@modules/web/pages/HomePage";
import Races from "@modules/web/pages/Races";
import NotFound from "@shared/components/404";

function App() {
    return (
        <BrowserRouter>
            <header className="sticky w-full top-0 z-900 flex justify-center items-center shadow-md bg-[#f5f7f8]">
                <Navbar links={webLinks} />
            </header>

            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/races" element={<Races />} />
                {/* <Route path="/about" element={<HomePage />} /> */}
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
