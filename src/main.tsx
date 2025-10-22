import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import Navbar from "./components/Nav/Navbar.tsx";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <header className="sticky w-full top-0 z-900 flex justify-center items-center shadow-md bg-[#f5f7f8]">
            <Navbar />
        </header>
        <App />
    </StrictMode>
);
