import type { NavLink } from "@shared/types/routes.types";

export const webLinks: NavLink[] = [
    { to: "/", label: "Inicio" },
    { to: "/races", label: "Carreras" },
    { to: "/about", label: "Acerca de" },
];

export const clientLinks: NavLink[] = [
    { to: "/client/create-race", label: "Create Race" },
    { to: "/client/my-races", label: "My Races" },
    { to: "/races", label: "All Races" }, // Goes back to web layout races
    { to: "/client/profile", label: "Profile" },
];
