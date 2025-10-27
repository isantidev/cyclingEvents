import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@/index.css";
import App from "@/App";
import Navbar from "@modules/web/components/Nav/Navbar";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <header className="sticky w-full top-0 z-900 flex justify-center items-center shadow-md bg-[#f5f7f8]">
            <Navbar />
        </header>
        <App />
    </StrictMode>
);
