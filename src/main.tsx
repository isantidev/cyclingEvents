import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "@/index.css";
import App from "@/App";
import Navbar from "@modules/web/components/Nav/Navbar";
import { webLinks } from "@shared/config/routes.config";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <BrowserRouter>
            <header className="sticky w-full top-0 z-900 flex justify-center items-center shadow-md bg-[#f5f7f8]">
                <Navbar links={webLinks} />
            </header>
            <App />
        </BrowserRouter>
    </StrictMode>
);
